let mobileMenu = "closed";
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const nav_ul = document.querySelector("nav ul");
const logo = document.querySelector("#logo");

document.addEventListener("DOMContentLoaded", function(event) {
  navMenu();
  scrolledMenu();
  document.querySelector("#logo").addEventListener("click", () => {
    window.location = "/index.html#start";
    if (mobileMenu === "open") {
      closeMenu();
    }
  });
});

function navMenu() {
  document.querySelector(".menu").addEventListener("click", openMenu);
  nav_ul.addEventListener("click", closeMenu);
}

function openMenu() {
  console.log("menu open");
  menu.classList.add("change");
  menu.removeEventListener("click", openMenu);
  menu.addEventListener("click", closeMenu);
  nav.classList.remove("up");
  nav.classList.add("down");
  nav.classList.remove("in");
  if (window.innerWidth < 900) {
    setTimeout(() => {
      nav_ul.classList.remove("nav_up");
      nav_ul.classList.add("nav_down");
      logo.classList.add("fadeout");
    }, 200);
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
      nav.classList.remove("in");
      logo.classList.remove("fadeout");
    }, 200);
  }
  mobileMenu = "closed";
}

function scrolledMenu() {
  window.addEventListener("scroll", scrolled);

  function scrolled() {
    window.removeEventListener("scroll", scrolled);
    if (mobileMenu !== "open") {
      nav.classList.remove("in");
      nav.classList.add("out");
      setTimeout(function() {
        nav.classList.remove("out");
        nav.classList.add("in");
        scrolledMenu();
      }, 1000);
    }
  }
}
