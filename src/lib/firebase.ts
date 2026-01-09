import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Config provided for the live site
const firebaseConfig = {
    apiKey: "AIzaSyCrkPBzS80ALSD14ZvNidad2vb3tK5d1iI",
    authDomain: "damascu-translation-services.firebaseapp.com",
    projectId: "damascu-translation-services",
    storageBucket: "damascu-translation-services.firebasestorage.app",
    messagingSenderId: "407229259700",
    appId: "1:407229259700:web:9250e9483cd428dca6dce1",
    measurementId: "G-0EBESEQ5S0"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (check if window is defined for SSR/build safety)
export const analytics = typeof window !== "undefined" ? getAnalytics(firebaseApp) : undefined;

// Initialize Firebase Auth
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();

export default firebaseApp;
