"use strict";

/*___Define elements' variables___*/
const pageSections = document.querySelectorAll("[data-nav]");
const navBarList = document.getElementById("navbar__list");
const sectionNames = [];
const sectionIDs = [];

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
    console.log(sectionNames[i], sectionIDs[i]);
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
 * Building the Nav bar on windows loading
 */
 window.onload = createNavigationBar();


/**
 * Adding the active class behaviour
*/

window.addEventListener("scroll", () => {
  pageSections.forEach(function (section) {
    let sectionTop = section.getBoundingClientRect().top;
    let thirdOfWindow = Math.floor(window.innerHeight / 4);
    if (sectionTop < thirdOfWindow && sectionTop >= -thirdOfWindow) {
      console.log(document.querySelector("a[href=\"#"+section.id+"\"]"));
      section.classList.add("activated-section");
      document.querySelector("a[href=\"#"+section.id+"\"]").style.color='orange'
      document.querySelector("a[href=\"#"+section.id+"\"]").style.background='#333'
    } else {
      section.classList.remove("activated-section");
      document.querySelector("a[href=\"#"+section.id+"\"]").style.color='black'
      document.querySelector("a[href=\"#"+section.id+"\"]").style.background='#fff'
    }
  });
});

// TODO: remove all console logs