import constants from '../../../constants.js';
import { getFocusable } from '../../../utility/toggle-focus/toggle-focus.js';
import hideSubNavigation from '../sub-navigation/hide-sub-navigation.js';
import closeSiblings from '../close-siblings/close-siblings.js';

// Toggles the visibility of the sub-navigation
const toggleSubNavigation = (btn, id) => {
  const subNavigation = document.getElementById(id);
  if (!subNavigation || !btn) return;

  const isHidden = subNavigation.hasAttribute('hidden');
  // We need to show the sub-navigation
  if (isHidden) {

    closeSiblings(btn);

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
    hideSubNavigation(btn, subNavigation);
  }
};

export default toggleSubNavigation;
