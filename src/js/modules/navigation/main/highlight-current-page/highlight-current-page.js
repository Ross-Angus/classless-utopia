// Recursive function which looks upward from the current DOM element
// and attempts to find toggle buttons. It stops when it reaches
// a `nav` element
const toggleTree = (element, expandNavigation) => {
  if (element === null) return;

  const toggleButton = element.querySelector(':scope > button[data-js="subnav-toggle"]');
  // Is this element a list item?
  // Does it have a `button` element inside?
  if (toggleButton !== null) {
    // If the second argument is set to `true`, the whole navigation tree
    // will expand so that the current navigation element is displayed.
    expandNavigation && toggleButton.click();
    toggleTree(element.parentElement);
  } else if (element.tagName !== 'NAV' && element.parentElement !== null) {
    // Move up the tree, as long as you haven't hit the `nav` element
    toggleTree(element.parentElement);
  }
};

// This attempts to find the current URL within the main navigation
// If it succeeds and `expandNavigation` is set to `true`, it
// expands the navigation tree to display the link and highlights it.
// If `expandNavigation` is set to `false`, it just highlights the
// current page in the navigation.
// Assumptions: all links within the main navigation tree are from the
// root of the site, i.e. they start with a forward slash.
const highlightCurrentPage = (navListItems, expandNavigation = false) => {
  if (navListItems === null) return;

  // The current page
  let path = location.pathname;
  const lastChar = path.slice(-1);
  // Trim off the trailing slash (if present) just in case the navigation
  // has also done so
  const pathLength = path.length;
  if (lastChar === "/" && pathLength > 1) path = path.substring(0, pathLength - 1);

  // for ... of used so I can break out of the loop early
  for (const li of navListItems) {
    const anchor = li.querySelector('a');
    if (anchor !== null) {
      const href = anchor.getAttribute('href');
      // Does this element represent the current node?
      if (href.indexOf(path) !== -1) {
        const highlightElement = document.createElement('strong');
        // Highlight the current node
        li.insertBefore(highlightElement, anchor);
        highlightElement.appendChild(anchor);
        toggleTree(li.parentElement, expandNavigation);
        return false;
      }
    }
  }
};

export default highlightCurrentPage;
