"use strict";

let click;
let windowWidth;

window.addEventListener("DOMContentLoaded", init);

function init() {
  links();
  accordion();
  resize();
  // setAOS();
  window.onresize = resize;
}

function links() {
  console.log("links");
  document.querySelector(".more").addEventListener("click", () => {
    window.location = "index.html#koncept";
  });
}

function resize() {
  windowWidth = window.innerWidth;
  console.log(windowWidth);
  accordion();
}

function accordion() {
  // based on w3schools Collapsibles/Accordion

  if (windowWidth < 800) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      };
    }

    //discard mobile accordion styles
    document.querySelector(".technologies").classList.remove("content");
    document.querySelector(".technologies").classList.add("mobile");
  } else {
    document.querySelector(".technologies").classList.remove("mobile");
    document.querySelector(".technologies").classList.add("content");
  }
}

// function setAOS() {
//   setTimeout(function() {
//     let script = document.createElement("script");
//     script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
//     document.body.appendChild(script);
//     script.onload = function() {
//       AOS.init();
//     };
//   }, 2000);
// }
