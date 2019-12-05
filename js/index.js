"use strict";

let click;

window.addEventListener("DOMContentLoaded", init);

function init() {
  links();
}

function links() {
  console.log("links");
  document.querySelector(".more").addEventListener("click", () => {
    window.location = "index.html#koncept";
  });
}
