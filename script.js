const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
window.onload = function () {
  window.scrollTo(0, 0);
};

// Menüden bir linke basınca kapansın
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
// Sayfa açıldığında her zaman en üste gelsin
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

