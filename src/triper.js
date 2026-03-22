// public/triper.js

(function () {
  function initTriperButtons(root = document) {
    const buttons = root.querySelectorAll(
      "[data-triper-session], [data-session]"
    );

    buttons.forEach((btn) => {
      const session =
        btn.getAttribute("data-triper-session") ||
        btn.getAttribute("data-session");

      const amount =
        btn.getAttribute("data-triper-amount") ||
        btn.getAttribute("data-amount");

      if (!session) return;

      // Attach click handler
      btn.addEventListener("click", () => {
        window.location.href =
          `https://fridge-distinction-therefore-sophisticated.trycloudflare.com/pay/${encodeURIComponent(session)}`;
      });

      // Auto-label if empty
      if (!btn.innerText.trim() && amount) {
        btn.innerText = `Pay ${amount}`;
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initTriperButtons());
  } else {
    initTriperButtons();
  }

  // Expose global API
  window.Triper = {
    init: initTriperButtons,
  };
})();
