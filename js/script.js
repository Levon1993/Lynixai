document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Nachricht gesendet (Demo)");
});

document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieBanner").style.display = "flex";
  }

  document.getElementById("acceptCookies").addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookieBanner").style.display = "none";
  });
});
