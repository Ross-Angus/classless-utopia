import subnavSetup from "./sub-navigation/subnav-setup.js";
import highlightCurrentPage from "./highlight-current-page/highlight-current-page.js";
import generateBurgerButtons from "./generate-burger-buttons/generate-burger-buttons.js";
import generateSpacerNav from "./generate-spacer-nav/generate-spacer-nav.js";

// This runs once to set up all the extra markup which the main navigation needs
// in order to work nicely
const mainNavSetup = () => {
  // This is just for nested navigation. It runs on all list items which match
  // the pattern and because the `index` is a running count of all of them, it
  // ensures that the generated `id`s will be unique.
  const navElements = document.querySelectorAll('header nav > ul li');
  if (navElements.length > 0) {
    navElements.forEach((navLi, index) => {
      // Does this li have both an anchor tag and a nested `ul`?
      const anchor = navLi.querySelector(':scope > a');
      const ul = navLi.querySelector('ul');
      // Does this node have the required markup?
      anchor !== null && ul !== null && subnavSetup(anchor, ul, index);
    });
    // Call the highlight function
    highlightCurrentPage(navElements);
  }

  // This generates the burger menu toggle buttons for each of the qualifying
  // navigation bars (it's highly likely that there is only one, but who knows?)
  // While this could be wrapped into the loops above, it runs the risk of creating
  // duplicate `id`s so I've taken the hit of another `querySelectorAll` call.
  const navUls = document.querySelectorAll('header nav > ul');
  navUls.forEach((navUl, index) => {
    generateBurgerButtons(navUl, index);
    generateSpacerNav(navUl, index);
  });

};

export default mainNavSetup;
