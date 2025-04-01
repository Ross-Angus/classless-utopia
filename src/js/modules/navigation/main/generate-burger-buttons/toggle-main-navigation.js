import constants from '../../../constants.js';

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
  } else {
    mainNavigation.setAttribute('hidden', '');
    Object.entries({
      'aria-expanded': 'false',
      'aria-label': constants.OPEN_MAINNAV_STRING,
      'title': constants.OPEN_MAINNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });
  }
};

export default toggleMainNavigation;
