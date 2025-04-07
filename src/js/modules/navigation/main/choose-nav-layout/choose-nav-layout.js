import { lineNumbers } from "../../../utility/detect-wrap/detect-wrap.js";

// This chooses if the main navigation should have a vertical or horizontal
// layout. It will select horizontal if the top level navigation does not
// wrap and vertical if it will. It doesn't care about screen width, only
// wrapping.
const chooseNavLayout = (navUl) => {
  // We use the spacer nav to determine if the burger menu or the horizontal
  // menu should show
  const spacerNav = navUl.previousSibling;
  const burgerBtn = navUl.nextSibling;
  const childMenus = navUl.querySelectorAll(':scope > ul');
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

    // Mark this navigation as horizontal
    navUl.setAttribute('data-layout', 'horizontal');

  }
  // The navigation is vertical
  else {
    // Show burger menu
    burgerBtn.removeAttribute('aria-hidden');
    burgerBtn.removeAttribute('hidden');
    burgerBtn.removeAttribute('tabindex');

    // Mark this navigation as vertical
    navUl.setAttribute('data-layout', 'vertical');

    // Hides all navigation
    Object.entries({
      'hidden': '',
      'aria-hidden': 'true'
    }).forEach(([key, value]) => {
      navUl.setAttribute(key, value);
    });

    // Allows the first level of navigation to fall into focus
    // const topLevelLinks = navUl.querySelectorAll(":scope :not('ul') a");
    // topLevelLinks.forEach(link => {
    //   toggleFocus(link, true);
    // });

    // Allows the first level of toggle buttons to fall into focus
    // const topLevelButtons = navUl.querySelectorAll(":scope :not('ul') button");
    // topLevelButtons.forEach(button => {
    //   toggleFocus(button, true);
    // });
  }

  // Both vertical and horizontal navigation need to hide the second level
  // of navigation
  if (childMenus.length > 0) {
    Object.entries({
      'hidden': '',
      'aria-hidden': 'true'
    }).forEach(([key, value]) => {
      childMenus.setAttribute(key, value);
    });

    // Take focus away from sub-navigation
    childMenus.forEach(child => {
      getFocusable(child, false);
    });
  };
};

export default chooseNavLayout;
