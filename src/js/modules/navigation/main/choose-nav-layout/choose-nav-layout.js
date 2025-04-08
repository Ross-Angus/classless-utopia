import getTopLevel from '../get-top-level/get-top-level.js';
import toggleFocus, { getFocusable } from '../../../utility/toggle-focus/toggle-focus.js';
import { lineNumbers } from '../../../utility/detect-wrap/detect-wrap.js';
import hideSubNavigation from '../sub-navigation/hide-sub-navigation.js';

// This chooses if the main navigation should have a vertical or horizontal
// layout. It will select horizontal if the top level navigation does not
// wrap and vertical if it will. It doesn't care about screen width, only
// wrapping.
const chooseNavLayout = (navUl) => {
  // We use the spacer nav to determine if the burger menu or the horizontal
  // menu should show
  const spacerNav = navUl.previousSibling;
  const burgerBtn = navUl.nextSibling;
  const childMenus = navUl.querySelectorAll(':scope > li > ul');

  if (spacerNav === null || burgerBtn === null) return;
  const wrapCount = lineNumbers(spacerNav);

  // The navigation is horizontal
  if (wrapCount === 1) {

    // Hide burger menu
    Object.entries({
      'hidden': '',
      'tabindex': -1
    }).forEach(([key, value]) => {
      burgerBtn.setAttribute(key, value);
    });

    // Mark this navigation as horizontal
    navUl.setAttribute('data-layout', 'horizontal');

    // Make sure the top navigation links and buttons can fall into focus
    const topLevelElements = getTopLevel(navUl);
    topLevelElements.forEach(element => {
      toggleFocus(element);
    });

  }
  // The navigation is vertical
  else {
    // Show burger menu
    burgerBtn.removeAttribute('hidden');
    burgerBtn.removeAttribute('tabindex');

    // Mark this navigation as vertical
    navUl.setAttribute('data-layout', 'vertical');

    // Hides all navigation
    navUl.setAttribute('hidden', '');

    // Remove focus from the navigation
    getFocusable(navUl, false);

  }

  // Both vertical and horizontal navigation need to hide the second level
  // of navigation (and any under that)
  if (childMenus.length > 0) {

    childMenus.forEach(child => {

      // Hide the child menu
      const id = child.getAttribute('id');
      if (!id) return;
      const btn = document.querySelector(`[aria-controls="${id}"`);
      if (btn === null) return;
      const btnParent = btn.closest('li');
      // Only hide the sub-navigation if it's not currently set to show
      btn.getAttribute('aria-expanded') === 'false' && hideSubNavigation(btn, child, btnParent);

    });
  };
};

export default chooseNavLayout;
