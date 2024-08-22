// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJNw_waSZ4RfeLCKwAGo_evIevXh2EGYE",
    authDomain: "hooked0ntech.firebaseapp.com",
    projectId: "hooked0ntech",
    storageBucket: "hooked0ntech.appspot.com",
    messagingSenderId: "336881919226",
    appId: "1:336881919226:web:e9da090f9bee19f2bc5543",
    measurementId: "G-Z8T34JZXWP"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Conditionally initialize Firebase Analytics
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

// Export the initialized services for use in other parts of the app
export { auth, db, analytics };
export const firestore = getFirestore(app);

