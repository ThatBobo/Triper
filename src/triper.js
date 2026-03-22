// triper.js
// This file is built by Vite and used by NON‑React users.
// It imports the React component SOURCE and extracts logic from it.

// Import the React component SOURCE CODE as raw text.
// Vite supports ?raw and will inline the file as a string.
import buttonSource from "./components/ui/button.tsx?raw";

// --- 1. PARSE REDIRECT URL FROM THE COMPONENT -----------------------------

// Extract the redirect URL from the handleClick function
const redirectRegex = /window\.location\.href\s*=\s*`([^`]+)`/;
const redirectMatch = buttonSource.match(redirectRegex);

const redirectTemplate = redirectMatch
  ? redirectMatch[1]
  : "https://example.com/pay/${session}"; // fallback

// --- 2. PARSE DEFAULT BUTTON TEXT -----------------------------------------

// Looks for: {children || `Pay ${amount}`}
const defaultTextRegex = /`Pay \${amount}`/;
const defaultTextMatch = buttonSource.match(defaultTextRegex);

const defaultTextTemplate = defaultTextMatch
  ? defaultTextMatch[0].replace(/`/g, "")
  : "Pay ${amount}";

// --- 3. PARSE CLASS NAME ---------------------------------------------------

const classRegex = /className="([^"]+)"/;
const classMatch = buttonSource.match(classRegex);

const buttonClass = classMatch ? classMatch[1] : "triper-button";

// --- 4. APPLY LOGIC TO NON‑REACT BUTTONS -----------------------------------

export function activateTriperButtons() {
  const buttons = document.querySelectorAll("[data-session]");

  buttons.forEach(btn => {
    const session = btn.dataset.session;
    const amount = btn.dataset.amount;

    // Apply class if missing
    if (!btn.classList.contains(buttonClass)) {
      btn.classList.add(buttonClass);
    }

    // Apply default text if empty
    if (!btn.textContent.trim()) {
      btn.textContent = defaultTextTemplate.replace("${amount}", amount);
    }

    // Attach click handler
    btn.addEventListener("click", () => {
      const finalUrl = redirectTemplate.replace("${session}", session);
      window.location.href = finalUrl;
    });
  });
}

// --- 5. AUTO‑RUN WHEN LOADED IN BROWSER ------------------------------------

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", activateTriperButtons);
}

// --- 6. EXPORTS FOR DEVELOPERS ---------------------------------------------

export const TriperRuntime = {
  activateTriperButtons,
  redirectTemplate,
  defaultTextTemplate,
  buttonClass
};
