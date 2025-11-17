// src/components/FloatingWhatsApp.tsx
import React from "react";

type FloatingWhatsAppProps = {
  /** optional product name to include in message */
  productName?: string | null;
  /** phone number in E.164 w/out plus sign, e.g. "919819992488" */
  phone?: string;
  /** custom base message (if provided, productName will be appended) */
  baseMessage?: string;
  /** optional additional classes for wrapper */
  className?: string;
};

const DEFAULT_PHONE = "919819992488";
const DEFAULT_BASE_MESSAGE = "Hi, I want to enquire about your products.";

export default function FloatingWhatsApp({
  productName = null,
  phone = DEFAULT_PHONE,
  baseMessage = DEFAULT_BASE_MESSAGE,
  className = "",
}: FloatingWhatsAppProps) {
  const label = productName
    ? `WhatsApp: Enquire about ${productName}`
    : "WhatsApp: Contact us";

  const messageToSend = productName
    ? `${baseMessage} I'm interested in: ${productName}.`
    : baseMessage;

  const encodedMessage = encodeURIComponent(messageToSend);
  const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  const openWhatsApp = () => {
    // Try to open in a new tab. If blocked, fallback to setting location.
    try {
      const newWindow = window.open(waUrl, "_blank", "noopener,noreferrer");
      if (!newWindow) {
        // popup blocked -> fallback
        window.location.href = waUrl;
      }
    } catch (err) {
      // last resort: set location
      window.location.href = waUrl;
    }
  };

  return (
    <button
      aria-label={label}
      title={label}
      onClick={openWhatsApp}
      className={
        "fixed right-4 bottom-6 z-[60] flex items-center gap-3 p-3 rounded-full shadow-xl " +
        "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 " +
        "text-white text-sm font-medium transform-gpu transition-transform duration-150 " +
        "active:scale-95 " +
        "sm:right-6 sm:bottom-8 " +
        className
      }
      style={{
        // ensure button is high enough and visible across themes
        boxShadow: "0 8px 24px rgba(16,24,40,0.12)",
        minWidth: 52,
      }}
      // keyboard support: Enter/Space automatically handled for button element
    >
      {/* Icon (inline SVG) to avoid dependency issues */}
      <span
        aria-hidden
        className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
          role="img"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-4.2-1l-4.6 1 1-4.5A8.38 8.38 0 0 1 3 12.5 8.5 8.5 0 0 1 12.5 4 8.38 8.38 0 0 1 21 11.5z"></path>
          <path d="M16.5 13.5c-.7 0-1.3-.3-1.8-.8"></path>
        </svg>
      </span>

      <span className="hidden sm:inline-block pr-1">WhatsApp</span>
      <span className="sr-only">{label}</span>
    </button>
  );
}
