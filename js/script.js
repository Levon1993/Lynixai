document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Nachricht gesendet (Demo)");
});

button.addEventListener("click", function () {
  localStorage.setItem("cookiesAccepted", "true");
  banner.classList.remove("cookie-show");    // Animation raus
  banner.classList.add("cookie-hidden");     // wieder ausblenden
});
