function toggleMenu() {
  const nav = document.querySelector("nav ul");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (nav.style.display === "block") {
    nav.style.display = "none";
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    nav.style.display = "block";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextItem, 3000); // Change image every 3 seconds
});
// cookies
const acceptCookiesBtn = document.getElementById("accept-cookies");
const denyCookiesBtn = document.getElementById("deny-cookies");
const cookieBanner = document.querySelector(".cookie-banner");

acceptCookiesBtn.addEventListener("click", () => {
  document.cookie = "acceptCookies=true; max-age=31536000; path=/";
  cookieBanner.style.display = "none";
});
acceptCookiesBtn.addEventListener("click", () => {
  document.cookie = "deny-cookies=true; max-age=31536000; path=/";
  cookieBanner.style.display = "none";
});

denyCookiesBtn.addEventListener("click", () => {
  cookieBanner.style.display = "none";
});