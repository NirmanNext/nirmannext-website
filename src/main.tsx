import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function loadRecaptcha(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!recaptchaSiteKey) {
      console.warn("⚠️ VITE_RECAPTCHA_SITE_KEY is missing in your .env file.");
      return reject("Missing site key");
    }

    // Already loaded?
    if (window.grecaptcha) {
      return resolve();
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject("Failed to load reCAPTCHA script");
    document.head.appendChild(script);
  });
}

// Ensure script loads before app mounts
loadRecaptcha()
  .catch((err) => console.error(err))
  .finally(() => {
    createRoot(document.getElementById("root")!).render(<App />);
  });
