"use client";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useEffect, useState } from "react";

const ConsentBanner = () => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedConsent = Cookies.get("myAwesomeCookieConsent1");
      if (storedConsent) {
        try {
          const parsedConsent = JSON.parse(storedConsent);
          if (parsedConsent) {
            updateConsentStatus(true);
            loadGoogleAnalytics();
            setIsVisible(false);
          }
        } catch (error) {
          console.error("Error parsing cookie consent data:", error);
        }
      }
    }
  }, [isClient]);

  const handleAcceptAll = () => {
    Cookies.set("myAwesomeCookieConsent1", JSON.stringify(true), {
      expires: 365,
    });
    updateConsentStatus(true);
    loadGoogleAnalytics();
    setIsVisible(false);
  };

  const handleLeavePage = () => {
    window.location.href = "https://www.google.com";
  };

  const updateConsentStatus = (accepted: boolean) => {
    if (typeof gtag === "function") {
      gtag("consent", "update", {
        ad_user_data: accepted ? "granted" : "denied",
        ad_personalization: accepted ? "granted" : "denied",
        ad_storage: accepted ? "granted" : "denied",
        analytics_storage: accepted ? "granted" : "denied",
      });
    }
  };

  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-H9SD5NE89T";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-H9SD5NE89T");
    };
  };

  return (
    isVisible && (
      <CookieConsent
        location="bottom"
        buttonText=""
        declineButtonText=""
        cookieName="myAwesomeCookieConsent1"
        disableStyles={true}
        containerClasses="fixed bottom-0 left-0 right-0 bg-black/80 text-white text-sm p-8 flex flex-col items-center justify-center min-h-auto h-auto w-full max-w-full z-50"
        contentClasses="w-full"
        buttonClasses="hidden"
        declineButtonClasses="hidden"
        expires={365}
        onAccept={handleAcceptAll}
        onDecline={() => {}}
        extraCookieOptions={
          isClient ? { domain: window.location.hostname, expires: 365 } : {}
        }
      >
        <div className="flex flex-col gap-2 w-full">
          <p className="m-0 text-sm text-white text-center">
            This site uses cookies to enhance your experience. By continuing,
            you agree to our cookie use.
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handleAcceptAll}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1.5 rounded-md transition-colors"
            >
              Accept all
            </button>
            <button
              onClick={handleLeavePage}
              className="bg-transparent hover:bg-white/10 text-white text-sm px-4 py-1.5 border border-white rounded-md transition-colors"
            >
              Leave page
            </button>
          </div>
        </div>
      </CookieConsent>
    )
  );
};

export default ConsentBanner;
