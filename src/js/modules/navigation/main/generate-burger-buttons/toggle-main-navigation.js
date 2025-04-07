import constants from '../../../constants.js';
import toggleFocus, { getFocusable } from '../../../utility/toggle-focus/toggle-focus.js';
import getTopLevel from "../get-top-level/get-top-level.js";

// Toggles the sub-navigation
const toggleMainNavigation = (btn, id) => {
  const mainNavigation = document.getElementById(id);
  if (!mainNavigation || !btn) return;

  const isHidden = mainNavigation.hasAttribute('hidden');
  // We need to show the sub-navigation
  if (isHidden) {

    mainNavigation.removeAttribute('hidden');

    Object.entries({
      'aria-expanded': 'true',
      'aria-label': constants.CLOSE_MAINNAV_STRING,
      'title': constants.CLOSE_MAINNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });

    // Add focus to the top level links and buttons only
    const topLevelElements = getTopLevel(mainNavigation);
    topLevelElements.forEach(element => {
      toggleFocus(element);
    });

  } else {
    mainNavigation.setAttribute('hidden', '');

    Object.entries({
      'aria-expanded': 'false',
      'aria-label': constants.OPEN_MAINNAV_STRING,
      'title': constants.OPEN_MAINNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });

    // Remove focus from mainNavigation
    getFocusable(mainNavigation, false);
  }
};

export default toggleMainNavigation;
