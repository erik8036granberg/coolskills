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

function runSplash() {
  document.querySelector("#splash").classList.remove("hide");
  console.log("runSplash");

  //set slides

  const allSlides = document.querySelectorAll("#splash .slide");
  allSlides.forEach(slide => {
    slide.classList.add("faded");
  });
  const allContent = document.querySelectorAll("#splash .splash_content");
  allContent.forEach(content => {
    content.classList.add("faded");
  });

  //run slides
  slide1();
}

function slide1() {
  swapblack();
  document.querySelector(".slide_1 .bg_image").classList.add("zoom");
  document.querySelector(".slide_1").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector(".slide_1 .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document.querySelector(".slide_1 .splash_content").classList.add("faded");
      setTimeout(function() {
        document.querySelector(".slide_1").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide2();
      }, 500);
    }, 3000);
  }, 1000);
}

function slide2() {
  swapWhite();
  document.querySelector(".slide_2").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector(".slide_2 .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document.querySelector(".slide_2 .splash_content").classList.add("faded");
      setTimeout(function() {
        document.querySelector(".slide_2").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide3();
      }, 500);
    }, 2000);
  }, 1000);
}

function slide3() {
  swapblack();
  document.querySelector(".slide_3 .bg_image").classList.add("zoom");
  document.querySelector(".slide_3").classList.remove("faded");
  setTimeout(function() {
    document.querySelector(".slide_3").classList.add("faded");
  }, 3000);
  setTimeout(function() {
    slide4();
  }, 2500);
}

function slide4() {
  swapWhite();
  document.querySelector(".slide_4").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector(".slide_4 .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document.querySelector(".slide_4 .splash_content").classList.add("faded");
      setTimeout(function() {
        document.querySelector(".slide_4").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide5();
      }, 500);
    }, 2000);
  }, 1000);
}

function slide5() {
  swapblack();
  document.querySelector(".slide_5 .bg_image").classList.add("zoom");
  document.querySelector(".slide_5").classList.remove("faded");
  setTimeout(function() {
    document.querySelector(".slide_5").classList.add("faded");
  }, 3000);
  setTimeout(function() {
    // slide6();
  }, 2500);
}

function swapWhite() {
  document.querySelector(".more").classList.add("white");
  document.querySelector(".more_arrow").src =
    "../img/symbol-down-arrow-white.svg";
}

function swapblack() {
  document.querySelector(".more").classList.remove("white");
  document.querySelector(".more_arrow").src = "../img/symbol-down-arrow.svg";
}
