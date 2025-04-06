import subnavSetup from "./sub-navigation/subnav-setup.js";
import highlightCurrentPage from "./highlight-current-page/highlight-current-page.js";
import generateBurgerButtons from "./generate-burger-buttons/generate-burger-buttons.js";
import generateSpacerNav from "./generate-spacer-nav/generate-spacer-nav.js";
import { lineNumbers } from "../../utility/detect-wrap/detect-wrap.js";
import toggleFocus from "../../utility/toggle-focus/toggle-focus.js";

// This runs once to set up all the extra markup which the main navigation needs
// in order to work nicely
const mainNavSetup = () => {
  // This is just for nested navigation. It runs on all list items which match
  // the pattern and because the `index` is a running count of all of them, it
  // ensures that the generated `id`s will be unique.
  const navElements = document.querySelectorAll('header nav > ul li');
  if (navElements.length > 0) {
    navElements.forEach((navLi, index) => {
      const anchor = navLi.querySelector(':scope > a');
      const ul = navLi.querySelector(':scope > ul');
      // Does this node have the required markup?
      anchor !== null && ul !== null && subnavSetup(anchor, ul, index);
    });
    // Call the highlight function
    highlightCurrentPage(navElements);
  };

  // This generates the burger menu toggle buttons for each of the qualifying
  // navigation bars (it's highly likely that there is only one, but who knows?)
  // While this could be wrapped into the loops above, it runs the risk of creating
  // duplicate `id`s so I've taken the hit of creating another `querySelectorAll()`
  // call.
  const navUls = document.querySelectorAll('header nav > ul');
  navUls.forEach((navUl, index) => {
    generateBurgerButtons(navUl, index);
    generateSpacerNav(navUl, index);
  });

  // Listen for resize events so that we can switch the navigation between horizontal
  // and burger menu.
  window.addEventListener("resize", () => {
    navUls.forEach(navUl => {
      // We use the spacer nav to determine if the burger menu or the horizontal
      // menu should show
      const spacerNav = navUl.previousSibling;
      const burgerBtn = navUl.nextSibling;
      //console.log(burgerBtn, spacerNav, navUl);
      if (spacerNav === null || burgerBtn === null) return;
      const wrapCount = lineNumbers(spacerNav);

      // The navigation is horizontal
      if (wrapCount === 1) {
        // Hide burger menu
        Object.entries({
          'hidden': '',
          'aria-hidden': 'true',
          'tabindex': -1
        }).forEach(([key, value]) => {
          burgerBtn.setAttribute(key, value);
        });
        // Take focus away from sub-navigation
        toggleFocus(navUl, false);
      }
      // The navigation is vertical
      else {
        // Show burger menu
        burgerBtn.removeAttribute('aria-hidden');
        burgerBtn.removeAttribute('hidden');
        burgerBtn.removeAttribute('tabindex');
        toggleFocus(navUl, true);
      }
    });
  });
};

export default mainNavSetup;
