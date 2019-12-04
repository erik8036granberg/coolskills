let mobileMenu = "closed";

document.addEventListener("DOMContentLoaded", function(event) {
  navMenu();
  //   fadeMenu();
  document.querySelector("#logo").addEventListener("click", () => {
    window.location = "/index.html#start";
    if (mobileMenu === "open") {
      closeMenu();
    }
  });
});

function navMenu() {
  document.querySelector(".menu").addEventListener("click", openMenu);
  //   document.querySelector("nav ul").addEventListener("click", closeMenu);
}

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const nav_ul = document.querySelector("nav ul");

function openMenu() {
  console.log("menu open");
  menu.classList.add("change");
  menu.removeEventListener("click", openMenu);
  menu.addEventListener("click", closeMenu);
  nav.classList.remove("up");
  nav.classList.add("down");
  if (window.innerWidth < 900) {
    setTimeout(() => {
      nav_ul.classList.remove("nav_up");
      nav_ul.classList.add("nav_down");
    }, 250);
  }
  mobileMenu = "open";
}

function closeMenu() {
  console.log("menu closed");
  menu.removeEventListener("click", closeMenu);
  menu.addEventListener("click", openMenu);
  menu.classList.remove("change");
  nav_ul.classList.remove("nav_down");
  nav_ul.classList.add("nav_up");
  if (window.innerWidth < 900) {
    setTimeout(() => {
      nav.classList.remove("down");
      nav.classList.add("up");
    }, 250);
  }
  mobileMenu = "closed";
}
