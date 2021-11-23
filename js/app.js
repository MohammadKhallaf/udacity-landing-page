"use strict";

/*___Define elements' variables___*/
const pageSections = document.querySelectorAll("[data-nav]");
const navBarList = document.getElementById("navbar__list");
const sectionNames = [];
const sectionIDs = [];
let timeOut = 0;
let beforeScorll = window.pageYOffset;
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
    let listElement = document.createElement("li");
    let anchorElement = document.createElement("a");
    anchorElement.addEventListener("click", function () {
      event.preventDefault();
      pageSections[i].scrollIntoView({ behavior: "smooth" });
    });
    anchorElement.setAttribute("href", "#" + sectionIDs[i]);
    anchorElement.classList.add("menu__link");
    anchorElement.innerHTML = sectionNames[i];
    listElement.appendChild(anchorElement);
    navBarList.appendChild(listElement);
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
function hideOnTime(delay) {
  document.querySelector(".page__header").style.top = "0";
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    document.querySelector(".page__header").style.top = "-5rem";
  }, delay);
}
/**
 * Hide the navigation bar for scrolling to up
 */

 
function hideOnScroll(afterScroll) {
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


window.addEventListener("scroll", () => {
  setBehaviour();
  hideOnTime(2000);

  let afterScroll = window.pageYOffset;
  hideOnScroll(afterScroll);
});

// Show the Nav bar when hover at the top area
document.addEventListener("mousemove", function (e) {
  if (e.clientY <= 60) {
    hideOnTime(5000);
  } 
});
