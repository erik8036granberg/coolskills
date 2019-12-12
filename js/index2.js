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

let target;
let timer;

function runSplash() {
  console.log("runSplash");
  //set slides
  const allSlides = document.querySelectorAll("#splash .slide");
  allSlides.forEach(slide => {
    slide.classList.add("faded");
  });
  document.querySelector(".slide_2 .splash_content").classList.add("faded");
  //run slides
  target = ".slide_1";
  timer = 4000;
  showSlide(target, timer, "all_frame");
}

function showSlide(target, timer, frametype) {
  console.log("showSlide");

  // set more-arrow color
  colorSwap(frametype);

  //fade slide frame in
  fadeup(target, timer);

  //add zoom for images
  if (frametype === "all_frame" || frametype === "img_frame") {
    document.querySelector(target + " .bg_image").classList.add("zoom");
  }
  // add in for text
  if (frametype === "all_frame" || frametype === "text_frame") {
    let splash_content = target + " .splash_content";
    fadeup(splash_content);
    // set timer for hiding content again
    setTimeout(() => {
      fadedown(splash_content);
    }, timer);
  }
  // set timer for hiding content again
  let frame_time = timer + 1000;
  setTimeout(() => {
    fadedown(target);
  }, frame_time);
}

function fadeup(target) {
  console.log("fadeup");
  const domTarget = document.querySelector(target);
  domTarget.setAttribute(
    "style",
    "opacity:1; -moz-opacity:1; filter:alpha(opacity=100)"
  );
}

function fadedown(target) {
  console.log("fadedown");
  const domTarget = document.querySelector(target);
  domTarget.setAttribute(
    "style",
    "opacity:0; -moz-opacity:0; filter:alpha(opacity=0)"
  );
}

function colorSwap(frametype) {
  console.log("colorSwap");
  if (frametype === "text_frame") {
    document.querySelector(".more").classList.add("white");
  } else {
    document.querySelector(".more").classList.remove("white");
  }
}
