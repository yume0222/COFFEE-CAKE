const nav = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__hamburger");
const links = document.querySelectorAll(".header__nav-link");

hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  hamburger.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", isOpen);
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});