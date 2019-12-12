"use strict";

let click;
let windowWidth;

window.addEventListener("DOMContentLoaded", init);

function init() {
  links();
  accordion();
  resize();
  window.onresize = resize;
  runSplash();
}

function links() {
  console.log("links");
  document.querySelector(".more_wrapper").addEventListener("click", () => {
    window.location = "index.html#koncept";
  });
  document.querySelector("#splash .heart").addEventListener("click", () => {
    window.location = "index.html#bestil";
  });
}

function resize() {
  windowWidth = window.innerWidth;
  console.log(windowWidth);
  accordion();
}

function accordion() {
  // based on w3schools Collapsibles/Accordion

  if (windowWidth < 768) {
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

function runSplash() {
  console.log("runSplash");
  zoomBackground(1);
  setTimeout(() => {
    document.querySelector("#fire_frame h1").classList.add("fadedown");
  }, 4000);
  setTimeout(() => {
    document.querySelector("#fire_frame").classList.add("fadedown");
    slide2();
  }, 5000);
}

function slide2() {
  zoomBackground(1);
  colorWhite();
  setTimeout(() => {
    document.querySelector("#text_frame_1 h1").classList.add("fadedown");
  }, 4000);
  setTimeout(() => {
    document.querySelector("#text_frame_1").classList.add("fadedown");
  }, 5000);
}

function zoomBackground(activeSlide) {
  document
    .querySelector("#splash .slide_" + activeSlide + " .bg_image")
    .classList.add("zoom");
}

function colorWhite() {
  document.querySelector(".more").classList.add("white");
}

function colorblack() {
  document.querySelector(".more").classList.add("white");
}
