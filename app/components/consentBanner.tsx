'use client';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useEffect, useState } from "react";
import Script from "next/script";


const ConsentBanner = () => {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (Cookies.get("myAwesomeCookieConsent0") === "true") {
      setConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("myAwesomeCookieConsent0", "true", { expires: 1 });
    setConsent(true);
  };

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieConsent0"
        style={{ background: "#A0A2A0" , color: "#0A1109", fontSize: "1rem" , padding: "1rem" , textAlign: "center" , justifyContent: "center" , alignItems: "center" , display: "flex", fontFamily:"cursive" }}
        buttonStyle={{ color: "#A0A2A0", background: "#0A1109", fontSize: "1rem" , padding: "0.5rem" , textAlign: "center" , justifyContent: "center" , alignItems: "center" , display: "flex" , border: "none" , cursor: "pointer", borderRadius: "0.5rem", margin: "0.5rem" }}
        expires={150}
        onAccept={handleAccept}
      >
        This website uses cookies to save your preferences and provide a personalized user experience. By using this site, you consent to the use of cookies.
      </CookieConsent>
      {consent && (
        <>
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
        </>
      )}
    </>
  );
};

export default ConsentBanner;
