'use client';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useEffect, useState } from "react";
import Script from "next/script";

// Define a type for the consent object
interface Consent {
  ad_user_data: boolean;
  ad_personalization: boolean;
  ad_storage: boolean;
  analytics_storage: boolean;
}

const ConsentBanner = () => {
  // Initialize state with the defined Consent type
  const [consent, setConsent] = useState<Consent>({
    ad_user_data: false,
    ad_personalization: false,
    ad_storage: false,
    analytics_storage: false,
  });

  // State to check if window is available
  const [isClient, setIsClient] = useState(false);

  // Check if running on client-side
  useEffect(() => {
    setIsClient(true); // This will run only on the client-side
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedConsent = Cookies.get("myAwesomeCookieConsent1");
      if (storedConsent) {
        try {
          const parsedConsent: Consent = JSON.parse(storedConsent);
          setConsent(parsedConsent);
          updateConsentStatus(parsedConsent);
          if (parsedConsent.analytics_storage) {
            loadGoogleAnalytics();
          }
        } catch (error) {
          console.error("Error parsing cookie consent data:", error);
        }
      }
    }
  }, [isClient]);

  const handleAccept = () => {
    Cookies.set("myAwesomeCookieConsent1", JSON.stringify(consent), { expires: 1 });
    updateConsentStatus(consent);
    if (consent.analytics_storage) {
      loadGoogleAnalytics();
    }
  };

  const handleAcceptAll = () => {
    const allConsent: Consent = {
      ad_user_data: true,
      ad_personalization: true,
      ad_storage: true,
      analytics_storage: true,
    };
    setConsent(allConsent);
    Cookies.set("myAwesomeCookieConsent1", JSON.stringify(allConsent), { expires: 365 });
    updateConsentStatus(allConsent);
    loadGoogleAnalytics();
  };



  // Update the consent status
  const updateConsentStatus = (consent: Consent) => {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_user_data': consent.ad_user_data ? 'granted' : 'denied',
        'ad_personalization': consent.ad_personalization ? 'granted' : 'denied',
        'ad_storage': consent.ad_storage ? 'granted' : 'denied',
        'analytics_storage': consent.analytics_storage ? 'granted' : 'denied',
      });
    }
  };

  // Load the Google Analytics script
const loadGoogleAnalytics = () => {
  const script = document.createElement('script');
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-H9SD5NE89T";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-H9SD5NE89T');
  };
};


  // Handle changes in consent checkboxes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setConsent(prevConsent => ({
      ...prevConsent,
      [name]: checked
    }));
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText={Object.values(consent).some(value => value) ? "Save preferences" : "Accept all"}
        cookieName="myAwesomeCookieConsent1"
        style={{
          background: "#A0A2A0",
          color: "#0A1109",
          fontSize: "1rem",
          padding: "1rem",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        buttonStyle={{
          color: "#A0A2A0",
          background: "#0A1109",
          fontSize: "1rem",
          padding: "0.5rem",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          border: "none",
          cursor: "pointer",
          borderRadius: "0.5rem",
        }}
        expires={1}
        onAccept={Object.values(consent).some(value => value) ? handleAccept : handleAcceptAll}
        extraCookieOptions={isClient ? { domain: window.location.hostname } : {}}
      >
        <p className="mb-2">This site uses cookies to enhance your experience and save your preferences. By continuing, you agree to our cookie use.</p>
        
        <label className="m-2">
          <input
            className="mr-1 scale-150"
            type="checkbox"
            name="ad_user_data"
            checked={consent.ad_user_data}
            onChange={handleCheckboxChange}
          />
          Ad data
        </label>
        <label className="m-2">
          <input
            className="mr-1 scale-150"
            type="checkbox"
            name="ad_personalization"
            checked={consent.ad_personalization}
            onChange={handleCheckboxChange}
          />
          Personalized ads
        </label>
        <label className="m-2">
          <input
            className="mr-1 scale-150"
            type="checkbox"
            name="ad_storage"
            checked={consent.ad_storage}
            onChange={handleCheckboxChange}
          />
          Save ad preferences
        </label>
        <label className="m-2">
          <input
            className="mr-1 scale-150"
            type="checkbox"
            name="analytics_storage"
            checked={consent.analytics_storage}
            onChange={handleCheckboxChange}
          />
          Track usage
        </label>
      </CookieConsent>
    </>
  );
};

export default ConsentBanner;
