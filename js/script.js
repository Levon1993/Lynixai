// Kontaktformular (Demo)
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Nachricht gesendet (Demo)");
});

// Cookie-Banner
window.addEventListener("load", function () {
  const banner = document.getElementById("cookie-banner");
  const button = document.getElementById("accept-cookies");

  if (!banner || !button) return; // Sicherheit

  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => {
      banner.classList.remove("cookie-hidden");
      banner.classList.add("cookie-show");
    }, 500);
  }

  button.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.remove("cookie-show");
    banner.classList.add("cookie-hidden");
  });
});
