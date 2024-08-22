// app/hooked0nstudys/firebaseTest/page.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase"; // Ensure this path is correct

const FirebaseAuthPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure you use the imported auth object
    const authInstance = auth; // Use auth from import

    const uiConfig = {
      signInSuccessUrl: "/hooked0nstudys",
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: "<your-terms-of-service-url>", // Optional
      privacyPolicyUrl: "<your-privacy-policy-url>", // Optional
    };

    const authUI =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(authInstance);

    authUI.start("#firebaseui-auth-container", uiConfig);

    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        router.push("/hooked0nstudys");
      }
    });

    return () => unsubscribe();

  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <h1 className="text-3xl font-bold mb-6">Log in to Hooked0nStudys</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default FirebaseAuthPage;
