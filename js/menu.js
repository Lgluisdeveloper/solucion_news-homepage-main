const menu = document.querySelector(".menuHamburguesa");
const menuClose = document.querySelector(".menuClose");
const navContainer = document.querySelector(".nav__container");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  navContainer.classList.toggle("nav__container--show");
  nav.classList.toggle("nav--show");
});

menuClose.addEventListener("click", function () {
  navContainer.classList.toggle("nav__container--show");
  nav.classList.toggle("nav--show");
});

console.log(menu);
console.log(menuClose);
console.log(navContainer);
console.log(nav);
