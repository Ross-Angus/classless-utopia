import constants from '../../../constants.js';

// Toggles the sub-navigation
const toggleSubNavigation = (btn, id) => {
  const subNavigation = document.getElementById(id);
  if (!subNavigation || !btn) return;

  const isHidden = subNavigation.hasAttribute('hidden');
  // We need to show the sub-navigation
  if (isHidden) {
    subNavigation.removeAttribute('hidden');
    Object.entries({
      'aria-expanded': 'true',
      'aria-label': constants.CLOSE_STRING,
      'title': constants.CLOSE_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });
  } else {
    subNavigation.setAttribute('hidden', '');
    Object.entries({
      'aria-expanded': 'false',
      'aria-label': constants.OPEN_STRING,
      'title': constants.OPEN_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });
  }
};

export default toggleSubNavigation;
