/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

/**_____________________________my Code is here */
// get section names
const pageSections = document.querySelectorAll("[data-nav]");
const sectionNames = [];
const sectionIDs = [];
pageSections.forEach(function (section) {
  sectionNames.push(section.getAttribute("data-nav"));
  sectionIDs.push(section.id);
});

// get the nav bar list element
const navBarList = document.getElementById("navbar__list");

for (i in sectionNames) {
  console.log(sectionNames[i],sectionIDs[i]);
  let R = document.createElement("li");
  let L = document.createElement("a");
  L.setAttribute("href", "#"+sectionIDs[i]);
  L.classList.add("menu__link");
  L.innerHTML = sectionNames[i];
  
  R.appendChild(L);
  navBarList.appendChild(R);
}
