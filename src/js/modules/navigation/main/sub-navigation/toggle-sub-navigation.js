import { getFocusable } from '../../../utility/toggle-focus/toggle-focus.js';
import hideSubNavigation from '../sub-navigation/hide-sub-navigation.js';
import closeSiblings from '../close-siblings/close-siblings.js';

// Toggles the visibility of the sub-navigation
const toggleSubNavigation = (btn, id) => {
  const subNavigation = document.getElementById(id);
  if (!subNavigation || !btn) return;

  const isHidden = subNavigation.hasAttribute('hidden');
  const btnParent = btn.closest('li');
  // We need to show the sub-navigation
  if (isHidden) {

    closeSiblings(btn);

    btnParent.setAttribute('data-selected', 'true');

    const navName = subNavigation.getAttribute('aria-label');
    const closeString = `Close ${navName}`;

    subNavigation.removeAttribute('hidden');

    Object.entries({
      'aria-expanded': 'true',
      'aria-label': closeString,
      'title': closeString
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });

    // Add back the ability to focus
    getFocusable(subNavigation, true);

  } else {
    hideSubNavigation(btn, subNavigation, btnParent);
  }
};

export default toggleSubNavigation;
