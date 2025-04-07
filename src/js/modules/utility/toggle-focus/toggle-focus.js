import hiddenParentCount from "../hidden-parent-count/hidden-parent-count.js";
// A string of selectors for elements which can receive focus
// The attribute `data-retain-focus` can be manually added to elements which should be
// outside the scope of this function.
const focusSelectors = 'a[href]:not([data-retain-focus]), area[href]:not([data-retain-focus]), input:not([disabled], [data-retain-focus]), select:not([disabled], [data-retain-focus]), textarea:not([disabled], [data-retain-focus]), button:not([disabled], [data-retain-focus]), iframe:not([data-retain-focus]), [tabindex]:not([tabindex="-1"], [data-retain-focus])';

// The receives and element and sets it to `tabindex="-1"`, unless they have
// a `data-retain-focus` attribute, in which case it doesn't alter them.
const toggleFocus = (element, addFocus = true) => {
  if (element === null) return;

  // The user wants to add the focus back in
  if (addFocus) {
    element.removeAttribute('tabindex');
  } else {
    element.setAttribute('tabindex', '-1');
  }
};

// This is passed an element and then looks inside that element for child elements
// which can receive focus. If it finds any, it passes them on to `toggleFocus()`.
export const getFocusable = (element, addFocus = true) => {
  if (element === null) return;

  const focusableElements = element.querySelectorAll(focusSelectors);

  focusableElements.forEach(el => {
    // This navigation can contain sub-navigation which is hidden. If the user wants
    // to hide the current level of navigation, it follow that all the sub-levels
    // should also hide.
    // However, if they want to show a level of navigation, then any sub-sub-levels
    // beneath that should remain hidden. This means that we need to exclude focusable
    // elements whose parents are hidden. But we need to distinguish between the parent
    // which the user wants to see which is hidden and the levels underneath that.
    if (addFocus) {
      if (hiddenParentCount(el) < 1) toggleFocus(el, addFocus);
    } else {
      toggleFocus(el, addFocus);
    }
  });
};

export default toggleFocus;
