import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Load reCAPTCHA v3 script dynamically from env
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

if (recaptchaSiteKey) {
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
} else {
  console.warn("⚠️ VITE_RECAPTCHA_SITE_KEY is missing in your .env file.");
}

createRoot(document.getElementById("root")!).render(<App />);
