document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Nachricht gesendet (Demo)");
});

document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  // Zeige Banner nur, wenn Cookies nicht akzeptiert wurden
  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => { banner.classList.add("show"); }, 100);
  }

  // Bei Klick auf "Akzeptieren"
  acceptBtn.addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "true");  // Speichert in Browser
    banner.classList.remove("show");  // Banner verschwindet
  });
});
