import subnavSetup from "./sub-navigation/subnav-setup.js";
import highlightCurrentPage from "./highlight-current-page/highlight-current-page.js";

const callSubnavSetup = (navUl) => {
  // This is just for nested navigation
  const navElements = navUl.querySelectorAll('li');
  if (navElements.length > 0) {
    navElements.forEach((navLi, index) => {
      // Does this li have both an anchor tag and a nested `ul`?
      const anchor = navLi.querySelector(':scope > a');
      const ul = navLi.querySelector('ul');
      // Does this node have the required markup?
      anchor !== null && ul !== null && subnavSetup(anchor, ul, index);
    });

    // Call highlight
    highlightCurrentPage(navElements);
  }
};

// This runs once to set up all the extra markup which the main navigation needs
// in order to work nicely
const mainNavSetup = () => {
  const navUls = document.querySelectorAll('header nav > ul');
  navUls.forEach(navUl => {
    callSubnavSetup(navUl);
  });
};

export default mainNavSetup;