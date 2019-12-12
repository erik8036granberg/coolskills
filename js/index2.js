"use strict";

let click;
let windowWidth;

window.addEventListener("DOMContentLoaded", init);

function init() {
  links();
  accordion();
  // resize();
  // window.onresize = resize;
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

// let target;
// let timer;

function runSplash() {
  document.querySelector("#splash").classList.remove("hide");
  console.log("runSplash");
  //set slides
  const allSlides = document.querySelectorAll("#splash .slide");
  allSlides.forEach(slide => {
    slide.setAttribute(
      "style",
      "opacity:0; -moz-opacity:0; filter:alpha(opacity=0)"
    );
  });
  document
    .querySelector(".slide_2 .splash_content")
    .setAttribute(
      "style",
      "opacity:0; -moz-opacity:0; filter:alpha(opacity=0)"
    );
  //run slides
  slide1();
}

function slide1() {
  let target = ".slide_1";
  let timer = 5000;
  showSlide(target, timer, "all_frame");
  setTimeout(() => {
    slide2(target);
  }, 6000);
}

function slide2() {
  let target = ".slide_2";
  let timer = 4000;
  showSlide(target, timer, "text_frame");
  setTimeout(() => {
    slide3(target);
  }, 5000);
}

function slide3() {
  let target = ".slide_3";
  let timer = 5000;
  showSlide(target, timer, "img_frame");
  // setTimeout(() => {
  //   slide4(target);
  // }, 7000);
}

function slide4() {
  let target = ".slide_4";
  let timer = 3000;
  showSlide(target, timer, "text_frame");
  setTimeout(() => {
    slide5(target);
  }, 5000);
}

function slide5() {
  let target = ".slide_5";
  let timer = 5000;
  showSlide(target, timer, "img_frame");
  setTimeout(() => {
    slide6(target);
  }, 7000);
}

function slide6() {
  let target = ".slide_6";
  let timer = 3000;
  showSlide(target, timer, "text_frame");
  setTimeout(() => {
    slide7(target);
  }, 5000);
}

function slide7() {
  let target = ".slide_7";
  let timer = 5000;
  showSlide(target, timer, "all_frame");
  setTimeout(() => {
    slide8(target);
  }, 7000);
}

function slide8() {
  let target = ".slide_8";
  let timer = 5000;
  showSlide(target, timer, "all_frame");
  setTimeout(() => {
    runSplash(target);
  }, 7000);
}

function showSlide(target, timer, frametype) {
  console.log("showSlide");
  console.log(target);
  console.log(timer);
  console.log(frametype);

  // set more-arrow color
  colorSwap(frametype);

  //fade slide frame in
  fadeup(target);

  // set timer for hiding Frame again
  let frametime = timer + 1000;
  setTimeout(() => {
    fadedown(target);
  }, frametime);

  //add zoom for images
  if (frametype === "all_frame" || frametype === "img_frame") {
    console.log("Det er en image_frame");
    document.querySelector(target + " .bg_image").classList.add("zoom");
  }

  // show splash content
  if (frametype === "all_frame" || frametype === "text_frame") {
    let splash_content = target + " .splash_content";

    setTimeout(() => {
      fadeup(splash_content);
    }, 1000);

    // set timer for hiding content again

    setTimeout(() => {
      fadedown(splash_content);
    }, timer);
  }
}

function fadeup(input) {
  console.log("fadeup");
  let domTarget = document.querySelector(input);
  domTarget.setAttribute(
    "style",
    "opacity:1; -moz-opacity:1; filter:alpha(opacity=100)"
  );
}

function fadedown(input) {
  console.log("fadedown");
  let domTarget = document.querySelector(input);
  console.log(domTarget);
  domTarget.setAttribute(
    "style",
    "opacity:0; -moz-opacity:0; filter:alpha(opacity=0)"
  );
}

function colorSwap(frametype) {
  console.log("colorSwap");
  if (frametype === "text_frame") {
    document.querySelector(".more").classList.add("white");
    document.querySelector(".more_arrow").src =
      "../img/symbol-down-arrow-white.svg";
  } else {
    document.querySelector(".more").classList.remove("white");
    document.querySelector(".more_arrow").src = "../img/symbol-down-arrow.svg";
  }
}
