import constants from "../../../constants.js";
import { getFocusable } from "../../../utility/toggle-focus/toggle-focus.js";

// This is passed a matching set of navigation, trigger button
// and a containing list item and sets them up to be hidden
const hideSubNavigation = (btn, subNav, li) => {
  if (subNav !== null) {
    Object.entries({
      'hidden': ''
    }).forEach(([key, value]) => {
      subNav.setAttribute(key, value);
    });
    // Remove the ability to focus
    getFocusable(subNav, false);
  }

  if (btn !== null) {
    Object.entries({
      'aria-expanded': 'false',
      'aria-label': constants.OPEN_SUBNAV_STRING,
      'title': constants.OPEN_SUBNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });
  }

  (li !== null || li !== undefined) && li.removeAttribute('data-selected');

};

export default hideSubNavigation;
