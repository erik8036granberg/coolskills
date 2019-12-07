"use strict";

let click;

window.addEventListener("DOMContentLoaded", init);

function init() {
  links();
  accordion();
}

function links() {
  console.log("links");
  document.querySelector(".more").addEventListener("click", () => {
    window.location = "index.html#koncept";
  });
}

function accordion() {
  // based on w3schools Collapsibles/Accordion

  if (window.innerWidth < 800) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      };
    }

    //discard mobile accordion styles
    document.querySelector(".technologies").classList.add("mobile");
  } else {
    document.querySelector(".technologies").classList.remove("mobile");
    document.querySelector(".technologies").classList.add("content");
  }
}
