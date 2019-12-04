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
}

function openMenu() {
  document.querySelector(".menu").classList.add("change");
  document.querySelector(".menu").removeEventListener("click", openMenu);
  document.querySelector(".menu").addEventListener("click", closeMenu);
  if (window.innerWidth < 900) {
  }
  mobileMenu = "open";
}

function closeMenu() {
  document.querySelector(".menu").removeEventListener("click", closeMenu);
  document.querySelector(".menu").addEventListener("click", openMenu);
  document.querySelector(".menu").classList.remove("change");
  if (window.innerWidth < 900) {
  }
  document.querySelector("html").classList.remove("fixed");
  mobileMenu = "closed";
}
