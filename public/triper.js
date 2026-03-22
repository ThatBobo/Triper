// public/triper.js

(function () {
  function initTriperButtons() {
    const buttons = document.querySelectorAll("[data-triper-session]");

    buttons.forEach((btn) => {
      const session = btn.getAttribute("data-triper-session");
      const amount = btn.getAttribute("data-triper-amount");

      btn.addEventListener("click", () => {
        window.location.href =
          `https://fridge-distinction-therefore-sophisticated.trycloudflare.com/pay/${session}`;
      });

      // Optional: auto-label if no text
      if (!btn.innerText.trim() && amount) {
        btn.innerText = `Pay ${amount}`;
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTriperButtons);
  } else {
    initTriperButtons();
  }
})();
