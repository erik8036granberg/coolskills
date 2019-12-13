"use strict";

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
  document.querySelector("#splash").classList.remove("hide");
  console.log("runSplash");

  document.querySelector("#splash #fire_frame").classList.add("faded");
  document.querySelector("#splash #skatertricks").classList.add("faded");
  document.querySelector("#splash #postermagic").classList.add("faded");
  document.querySelector("#splash #vinkler").classList.add("faded");
  document.querySelector("#splash #wondergirl").classList.add("faded");

  document
    .querySelector("#splash #fire_frame .splash_content")
    .classList.add("faded");
  document
    .querySelector("#splash #skatertricks .splash_content")
    .classList.add("faded");
  document
    .querySelector("#splash #vinkler .splash_content")
    .classList.add("faded");
  //run slides
  slide1();
}

function slide1() {
  swapBlack();
  document.querySelector("#splash #fire_frame .bg_image").classList.add("zoom");
  document.querySelector("#splash #fire_frame").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector("#splash #fire_frame .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document
        .querySelector("#splash #fire_frame .splash_content")
        .classList.add("faded");
      setTimeout(function() {
        document.querySelector("#splash #fire_frame").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide2();
      }, 500);
    }, 3000);
  }, 1000);
}

function slide2() {
  swapWhite();
  document.querySelector("#splash  #skatertricks").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector("#splash  #skatertricks .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document
        .querySelector("#splash  #skatertricks .splash_content")
        .classList.add("faded");
      setTimeout(function() {
        document.querySelector("#splash  #skatertricks").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide3();
      }, 500);
    }, 2000);
  }, 1000);
}

function slide3() {
  swapBlack();
  document
    .querySelector("#splash #postermagic .bg_image")
    .classList.add("zoom");
  document.querySelector("#splash #postermagic").classList.remove("faded");
  setTimeout(function() {
    document.querySelector("#splash #postermagic").classList.add("faded");
  }, 3000);
  setTimeout(function() {
    slide4();
  }, 2500);
}

function slide4() {
  swapWhite();
  document.querySelector("#splash #vinkler").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector("#splash #vinkler .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document
        .querySelector("#splash #vinkler .splash_content")
        .classList.add("faded");
      setTimeout(function() {
        document.querySelector("#splash #vinkler").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide5();
      }, 500);
    }, 2000);
  }, 1000);
}

function slide5() {
  swapBlack();
  document.querySelector("#splash #wondergirl .bg_image").classList.add("zoom");
  document.querySelector("#splash #wondergirl").classList.remove("faded");
  setTimeout(function() {
    document.querySelector("#splash #wondergirl").classList.add("faded");
  }, 3000);
  setTimeout(function() {
    // slide6();
  }, 2500);
}

function swapWhite() {
  document.querySelector(".more").classList.add("white_text");
  document.querySelector(".more svg").style.fill = "#d5d5d4";
}

function swapBlack() {
  document.querySelector(".more").classList.remove("white_text");
  document.querySelector(".more svg").style.fill = "#101010";
}
