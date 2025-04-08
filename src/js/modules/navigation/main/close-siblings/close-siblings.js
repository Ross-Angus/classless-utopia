import hideSubNavigation from '../sub-navigation/hide-sub-navigation.js';

// This is passed what is assumed to be a navigation toggle button and
// uses that to close all of the sibling navigation for this level
// (plus the navigation the current button represents)
const closeSiblings = btn => {
  // Get all the sibling sub-navigation (this makes the assumption that
  // the markup structure is predictable)
  const navParent = btn.closest('ul');
  if (navParent !== null) {
    const buttonParents = navParent.querySelectorAll(':scope > li');

    buttonParents.forEach(parent => {
      const btn = parent.querySelector(':scope > button');
      // This navigation element doesn't have sub-nav. Move on.
      if (btn === null) return;

      // Finding the connected navigation and checking if it exists
      const id = btn.getAttribute('aria-controls');
      if (!id) return;
      const subNav = document.getElementById(id);
      hideSubNavigation(btn, subNav, parent);
    });
  }
};

export default closeSiblings;
