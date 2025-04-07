import constants from '../../../constants.js';
import toggleFocus, { getFocusable } from "../../../utility/toggle-focus/toggle-focus.js";


// Toggles the visibility of the sub-navigation
const toggleSubNavigation = (btn, id) => {
  const subNavigation = document.getElementById(id);
  if (!subNavigation || !btn) return;

  const isHidden = subNavigation.hasAttribute('hidden');
  // We need to show the sub-navigation
  if (isHidden) {

    subNavigation.removeAttribute('hidden');

    Object.entries({
      'aria-expanded': 'true',
      'aria-label': constants.CLOSE_SUBNAV_STRING,
      'title': constants.CLOSE_SUBNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });

    // Add back the ability to focus
    getFocusable(subNavigation, true);

  } else {

    Object.entries({
      'hidden': ''
    }).forEach(([key, value]) => {
      subNavigation.setAttribute(key, value);
    });

    Object.entries({
      'aria-expanded': 'false',
      'aria-label': constants.OPEN_SUBNAV_STRING,
      'title': constants.OPEN_SUBNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });

    // Remove the ability to focus
    getFocusable(subNavigation, false);

  }
};

export default toggleSubNavigation;
