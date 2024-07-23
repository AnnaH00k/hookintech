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
        } catch (error) {
          console.error("Error parsing cookie consent data:", error);
        }
      }
    }
  }, [isClient]);

  const handleAccept = () => {
    Cookies.set("myAwesomeCookieConsent1", JSON.stringify(consent), { expires: 1 });
    updateConsentStatus(consent);
  };

  const handleAcceptAll = () => {
    const allConsent: Consent = {
      ad_user_data: true,
      ad_personalization: true,
      ad_storage: true,
      analytics_storage: true,
    };
    setConsent(allConsent);
    Cookies.set("myAwesomeCookieConsent1", JSON.stringify(allConsent), { expires: 1 });
    updateConsentStatus(allConsent);
  };

  const handleAcceptNecessary = () => {
    const necessaryConsent: Consent = {
      ad_user_data: false,
      ad_personalization: false,
      ad_storage: false,
      analytics_storage: false,
    };
    setConsent(necessaryConsent);
    Cookies.set("myAwesomeCookieConsent1", JSON.stringify(necessaryConsent), { expires: 1 });
    updateConsentStatus(necessaryConsent);
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
      {/* Load the Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H9SD5NE89T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H9SD5NE89T');
        `}
      </Script>

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
          fontFamily: "cursive",
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
        <p className="mb-2">This website uses cookies to save your preferences and improve your experience. By using this site, you consent to the use of cookies.</p>
        
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
