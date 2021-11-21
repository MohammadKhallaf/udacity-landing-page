"use strict";

/*___Define elements' variables___*/
const pageSections = document.querySelectorAll("[data-nav]");
const navBarList = document.getElementById("navbar__list");
const sectionNames = [];
const sectionIDs = [];
let timeOut = 0;
/**
 * ___Buid arrays of page section names and IDs___
 * Section Name to be used in Nav bar Name
 * Section ID to be used in linking to the section
 */

pageSections.forEach(function (section) {
  sectionNames.push(section.getAttribute("data-nav"));
  sectionIDs.push(section.id);
});

/**
 * Build the Nav Bar from section IDs as anchors in list items
 */

function createNavigationBar() {
  for (let i in sectionNames) {
    let R = document.createElement("li");
    let L = document.createElement("a");
    L.setAttribute("href", "#" + sectionIDs[i]);
    L.classList.add("menu__link");
    L.innerHTML = sectionNames[i];

    R.appendChild(L);
    navBarList.appendChild(R);
  }
}

/**
 * Adding the active class behaviour
 * and the active tab behaviour
 */

function setBehaviour() {
  pageSections.forEach(function (section) {
    let sectionTop = section.getBoundingClientRect().top;
    let thirdOfWindow = Math.floor(window.innerHeight / 3);

    if (sectionTop < thirdOfWindow && sectionTop >= -thirdOfWindow) {
      section.classList.add("activated-section");
      //tab-behaviour
      document.querySelector('a[href="#' + section.id + '"]').style.color =
        "orange";
      document.querySelector('a[href="#' + section.id + '"]').style.background =
        "#333";
    } else {
      section.classList.remove("activated-section");
      //tab-behaviour
      document.querySelector('a[href="#' + section.id + '"]').style.color =
        "black";
      document.querySelector('a[href="#' + section.id + '"]').style.background =
        "#fff";
    }
  });
}

/**
 * Hide the navigation bar after some time of no scrolling
 */
function hideOnTime() {
  document.querySelector(".page__header").style.top = "0";
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    document.querySelector(".page__header").style.top = "-5rem";
  }, 2000);
}
/**
 * Hide the navigation bar for scrolling to up
 */
function hideOnScroll(afterScroll){
  if (beforeScorll > afterScroll) {
    document.querySelector(".page__header").style.top = "0";
  } else {
    document.querySelector(".page__header").style.top = "-5rem";
  }
  beforeScorll = afterScroll;
}
/**
 * Building the Nav bar on windows loading
 */
window.onload = createNavigationBar();
var beforeScorll = window.pageYOffset;

window.addEventListener("scroll", () => {
  setBehaviour();
  hideOnTime();

  let afterScroll = window.pageYOffset;
  hideOnScroll(afterScroll)
  
});
