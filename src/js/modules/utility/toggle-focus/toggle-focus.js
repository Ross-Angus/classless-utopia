// A string of selectors for elements which can receive focus
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
    toggleFocus(el, addFocus);
  });
};

export default toggleFocus;
