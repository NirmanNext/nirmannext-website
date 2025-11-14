// src/lib/firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Firebase config from .env.local (Vite prefixes env vars with VITE_)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

// Check if Firebase config is valid
const isFirebaseConfigValid = () => {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

// Initialize Firebase only if config is valid
if (isFirebaseConfigValid()) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    
    // Initialize Analytics only in browser environment
    if (typeof window !== "undefined") {
      try {
        analytics = getAnalytics(app);
      } catch (error) {
        console.warn("Firebase Analytics initialization failed:", error);
      }
    }
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("⚠️ Firebase configuration is missing. Some features may not work.");
}

// Export with fallbacks
export { app };
export { db };
export { analytics };
