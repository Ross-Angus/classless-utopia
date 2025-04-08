import hiddenParentCount from "../hidden-parent-count/hidden-parent-count.js";

// A string of selectors for elements which can receive focus
// The attribute `data-retain-focus` can be manually added to elements which should be
// outside the scope of this function.
const focusSelectors = 'a[href]:not([data-retain-focus]), area[href]:not([data-retain-focus]), input:not([disabled], [data-retain-focus]), select:not([disabled], [data-retain-focus]), textarea:not([disabled], [data-retain-focus]), button:not([disabled], [data-retain-focus]), iframe:not([data-retain-focus]), [tabindex]:not([tabindex="-1"], [data-retain-focus])';

// The receives an element and either removes it from the tab index, or adds it back in,
// depending on the value of the second argument.
const toggleFocus = (element, addFocus = true) => {
  if (element === null) return;
  addFocus ? element.removeAttribute('tabindex') : element.setAttribute('tabindex', '-1');
};

// This is passed an element and then looks inside that element for child elements
// which can receive focus. If it finds any, it passes them on to `toggleFocus()`.
export const getFocusable = (element, addFocus = true) => {
  if (element === null) return;

  const focusableElements = element.querySelectorAll(focusSelectors);

  focusableElements.forEach(el => {
    // Imagine the following navigation:
    // Products
    // ‣  Widgets
    //    ‣ Electronic
    //    ‣ Household
    //    ‣ Work
    //      ‣ Stationery
    //      ‣ Furniture
    // ‣  Gadgets
    // When the user expands "Widgets", they would expect to see "Electronic, Household, Work".
    // They would *not* expect to see "Stationery, Furniture" as in order to do so, they would
    // have to first expand "Work".
    // This means this function needs to put *some* children into the tabindex again, but first
    // it needs to determine if they have a parent which is hidden.
    if (addFocus) {
      if (hiddenParentCount(el) < 1) toggleFocus(el, addFocus);
    } else {
      toggleFocus(el, addFocus);
    }
  });
};

export default toggleFocus;
