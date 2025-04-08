import { getFocusable } from "../../../utility/toggle-focus/toggle-focus.js";

// This is passed a matching set of navigation, trigger button
// and a containing list item and sets them up to be hidden
const hideSubNavigation = (btn, subNav, li) => {
  let navName = '';
  if (subNav !== null) {
    Object.entries({
      'hidden': ''
    }).forEach(([key, value]) => {
      subNav.setAttribute(key, value);
    });
    // Remove the ability to focus
    getFocusable(subNav, false);
    navName = subNav.getAttribute('aria-label');
  }

  const openString = `Open ${navName}`;

  if (btn !== null) {
    Object.entries({
      'aria-expanded': 'false',
      'aria-label': openString,
      'title': openString
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });
  }

  (li !== null || li !== undefined) && li.removeAttribute('data-selected');

};

export default hideSubNavigation;
