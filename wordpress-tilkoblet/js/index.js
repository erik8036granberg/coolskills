"use strict";

let windowWidth;
let pageContent;

window.addEventListener("DOMContentLoaded", init);

function init() {
  window.onresize = resize;
  resize();
  getPageContent();
  links();
  accordion();
  setSplash();
}

// - - - - - - - - - - - get page content  - - - - - - - - - - -

function getPageContent() {
  fetch("http://erik-crg.dk/kea/coolskills/wordpress/wp-json/wp/v2/pages/7")
    //   format as jason & send to sort
    .then(res => res.json())
    .then(data => {
      pageContent = data;
      console.log("data fetch");
      console.log(pageContent);
      insertPageContent();
    });
}

function insertPageContent() {
  console.log("insertPageContent");
  let dest = document.querySelector("[data-container]");

  // - - - - - - - - - - - page title & description - - - - - - - - - - -

  dest.querySelector("[data-seo_title]").textContent =
    pageContent.acf.seo_title;
  dest
    .querySelector("[data-seo_description]")
    .setAttribute("content", pageContent.acf.seo_description);

  // - - - - - - - - - - - splash - - - - - - - - - - -

  dest.querySelector("[data-splash_header]").textContent =
    pageContent.acf.splash_header;

  dest.querySelector("[data-splash_text_slide_1]").textContent =
    pageContent.acf.splash_text_slide_1;

  dest.querySelector("[data-splash_text_slide_2]").textContent =
    pageContent.acf.splash_text_slide_2;

  dest.querySelector("[data-splash_text_slide_3]").splash_text_slide_3 =
    pageContent.acf.splash_text_slide_3;

  dest.querySelector("[data-splash_crowdfunding]").innerHTML =
    pageContent.acf.splash_crowdfunding;

  dest.querySelector("[data-splash_crowdfunding_sub]").innerHTML =
    pageContent.acf.splash_crowdfunding_sub;

  dest.querySelector("[data-splash_logo_streetsport]").textContent =
    pageContent.acf.splash_logo_streetsport;

  // - - - - - - - - - - - koncept - - - - - - - - - - -

  dest.querySelector("[data-koncept_header]").textContent =
    pageContent.acf.koncept_header;

  dest.querySelector("[data-koncept_sub_header]").textContent =
    pageContent.acf.koncept_sub_header;

  dest.querySelector("[data-koncept_main_text]").innerHTML =
    pageContent.acf.koncept_main_text;

  dest.querySelector("[data-koncept_ar_info_header]").textContent =
    pageContent.acf.koncept_ar_info_header;

  dest.querySelector("[data-koncept_ar_info]").innerHTML =
    pageContent.acf.koncept_ar_info;

  dest.querySelector("[data-koncept_support_header]").textContent =
    pageContent.acf.koncept_support_header;

  dest.querySelector("[data-koncept_support_info]").textContent =
    pageContent.acf.koncept_support_info;

  dest.querySelector("[data-koncept_features_header]").textContent =
    pageContent.acf.koncept_features_header;

  dest.querySelector("[data-koncept_features_bullets]").innerHTML =
    pageContent.acf.koncept_features_bullets;

  dest.querySelector("[data-koncept_try_ar_header]").textContent =
    pageContent.acf.koncept_try_ar_header;

  dest.querySelector("[data-koncept_try_ar_info]").innerHTML =
    pageContent.acf.koncept_try_ar_info;

  dest.querySelector("[data-koncept_test_header]").textContent =
    pageContent.acf.koncept_test_header;

  dest.querySelector("[data-koncept_3d_test]").textContent =
    pageContent.acf.koncept_3d_test;

  dest.querySelector("[data-koncept_ar_test]").textContent =
    pageContent.acf.koncept_ar_test;

  // - - - - - - - - - - - faq - - - - - - - - - - -

  dest.querySelector("[data-faq_header]").textContent =
    pageContent.acf.faq_header;

  dest.querySelector("[data-faq_1_header]").textContent =
    pageContent.acf.faq_1_header;

  dest.querySelector("[data-faq_1_text]").textContent =
    pageContent.acf.faq_1_text;

  dest.querySelector("[data-faq_1_bullets]").innerHTML =
    pageContent.acf.faq_1_bullets;

  dest.querySelector("[data-faq_2_header]").textContent =
    pageContent.acf.faq_2_header;

  dest.querySelector("[data-faq_2_text]").textContent =
    pageContent.acf.faq_2_text;

  dest.querySelector("[data-faq_2_bullets]").innerHTML =
    pageContent.acf.faq_2_bullets;

  dest.querySelector("[data-faq_3_header]").textContent =
    pageContent.acf.faq_3_header;

  dest.querySelector("[data-faq_3_text]").textContent =
    pageContent.acf.faq_3_text;

  dest.querySelector("[data-faq_3_bullets]").innerHTML =
    pageContent.acf.faq_3_bullets;

  dest.querySelector("[data-faq_4_header]").textContent =
    pageContent.acf.faq_4_header;

  dest.querySelector("[data-faq_4_text]").textContent =
    pageContent.acf.faq_4_text;

  dest.querySelector("[data-faq_4_bullets]").innerHTML =
    pageContent.acf.faq_4_bullets;

  dest.querySelector("[data-faq_5_header]").textContent =
    pageContent.acf.faq_5_header;

  dest.querySelector("[data-faq_5_text]").textContent =
    pageContent.acf.faq_5_text;

  dest.querySelector("[data-faq_5_bullets]").innerHTML =
    pageContent.acf.faq_5_bullets;

  dest.querySelector("[data-faq_6_header]").textContent =
    pageContent.acf.faq_6_header;

  dest.querySelector("[data-faq_6_text]").textContent =
    pageContent.acf.faq_6_text;

  dest.querySelector("[data-faq_6_bullets]").innerHTML =
    pageContent.acf.faq_6_bullets;

  // - - - - - - - - - - - development - - - - - - - - - - -

  dest.querySelector("[data-development_header]").textContent =
    pageContent.acf.development_header;
  dest.querySelector("[data-development_text]").innerHTML =
    pageContent.acf.development_text;

  dest.querySelector("[data-development_text_sub_header]").textContent =
    pageContent.acf.development_text_sub_header;

  dest.querySelector("[data-development_bullets]").innerHTML =
    pageContent.acf.development_bullets;

  dest.querySelector("[data-development_techno_header]").textContent =
    pageContent.acf.development_techno_header;
  dest.querySelector("[data-development_ar_text]").textContent =
    pageContent.acf.development_ar_text;
  dest.querySelector("[data-development_3d_text]").textContent =
    pageContent.acf.development_3d_text;
  dest.querySelector("[data-development_ir_text]").textContent =
    pageContent.acf.development_ir_text;
  dest.querySelector("[data-development_mc_text]").textContent =
    pageContent.acf.development_mc_text;

  // - - - - - - - - - - - bestil / støt - - - - - - - - - - -

  dest.querySelector("[data-support_header]").textContent =
    pageContent.acf.support_header;
  dest.querySelector("[data-support_sub_header]").textContent =
    pageContent.acf.support_sub_header;
  dest.querySelector("[data-support_text]").innerHTML =
    pageContent.acf.support_text;
  dest.querySelector("[data-support_flow_1]").textContent =
    pageContent.acf.support_flow_1;
  dest.querySelector("[data-support_flow_2]").textContent =
    pageContent.acf.support_flow_2;
  dest.querySelector("[data-support_flow_3]").textContent =
    pageContent.acf.support_flow_3;
  dest.querySelector("[data-support_flow_ok]").textContent =
    pageContent.acf.support_flow_ok;
  dest.querySelector("[data-support_flow_button]").textContent =
    pageContent.acf.support_flow_button;
  dest.querySelector("[data-support_facts_header]").textContent =
    pageContent.acf.support_facts_header;
  dest.querySelector("[data-support_facts_bullets]").innerHTML =
    pageContent.acf.support_facts_bullets;

  // - - - - - - - - - - - footer - - - - - - - - - - -

  dest.querySelector("[data-footer_contact]").innerHTML =
    pageContent.acf.footer_contact;
  dest.querySelector("[data-footer_about]").innerHTML =
    pageContent.acf.footer_about;
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

function setSplash() {
  document.querySelector("#splash #fire_frame").classList.add("faded");
  document.querySelector("#splash #skatertricks").classList.add("faded");
  document.querySelector("#splash #postermagic").classList.add("faded");
  document.querySelector("#splash #vinkler").classList.add("faded");
  document.querySelector("#splash #wondergirl").classList.add("faded");
  document.querySelector("#splash #fedt").classList.add("faded");
  document.querySelector("#splash #support").classList.add("faded");
  document.querySelector("#splash #streetsport").classList.add("faded");
  document.querySelector("#splash").classList.remove("hide");
  runSplash();
}

function runSplash() {
  console.log("runSplash");
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
        document
          .querySelector("#splash #fire_frame .bg_image")
          .classList.remove("zoom");
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
        document
          .querySelector("#splash #postermagic .bg_image")
          .classList.remove("zoom");
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
    slide6();
  }, 2500);
}

function slide6() {
  swapWhite();
  document.querySelector("#splash #fedt").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector("#splash #fedt .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document
        .querySelector("#splash #fedt .splash_content")
        .classList.add("faded");
      setTimeout(function() {
        document.querySelector("#splash #fedt").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        document
          .querySelector("#splash #wondergirl .bg_image")
          .classList.remove("zoom");
        slide7();
      }, 500);
    }, 2000);
  }, 1000);
}

function slide7() {
  swapBlack();
  document.querySelector("#splash #support").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector("#splash #support .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document
        .querySelector("#splash #support .splash_content")
        .classList.add("faded");
      setTimeout(function() {
        document.querySelector("#splash #support").classList.add("faded");
      }, 1000);
      setTimeout(function() {
        slide8();
      }, 500);
    }, 3000);
  }, 1000);
}

function slide8() {
  swapWhite();
  document.querySelector("#splash #streetsport").classList.remove("faded");
  setTimeout(function() {
    document
      .querySelector("#splash #streetsport .splash_content")
      .classList.remove("faded");
    setTimeout(function() {
      document
        .querySelector("#splash #streetsport .splash_content")
        .classList.add("faded");
      setTimeout(function() {
        document.querySelector("#splash #streetsport").classList.add("faded");
        setTimeout(function() {
          runSplash();
        }, 2000);
      }, 1000);
    }, 2000);
  }, 1000);
}

function swapWhite() {
  document.querySelector(".more").classList.add("white_text");
  document.querySelector(".more svg").style.fill = "#d5d5d4";
}

function swapBlack() {
  document.querySelector(".more").classList.remove("white_text");
  document.querySelector(".more svg").style.fill = "#101010";
}
