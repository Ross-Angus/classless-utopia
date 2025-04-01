// Recursive function which looks upward from the current DOM element
// and attempts to find toggle buttons. It stops when it reaches
// a `nav` element
const toggleTree = (element) => {
  if (element === null) return;

  const toggleButton = element.querySelector(':scope > button[data-js="subnav-toggle"]');
  // Is this element a list item?
  // Does it have a `button` element inside?
  if (toggleButton !== null) {
    toggleButton.click();
    toggleTree(element.parentElement);
  } else if (element.tagName !== 'NAV' && element.parentElement !== null) {
    // Move up the tree, as long as you haven't hit the `nav` element
    toggleTree(element.parentElement);
  }
};

// This attempts to find the current URL within the main navigation
// If it succeeds, it expands the navigation tree to display the link
// and highlights it.
// Assumptions: all links within the main navigation tree are from the
// root of the site.
const highlightCurrentPage = (navListItems) => {
  if (navListItems === null) return;

  // The current page
  let path = location.pathname;
  const lastChar = path.slice(-1);
  // Trim off the trailing slash (if present) just in case the navigation
  // has also done so
  if (lastChar === "/" && path.length > 1) path = path.substring(0, path.length - 1);

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
        toggleTree(li.parentElement);
        return false;
      }
    }
  }
};

export default highlightCurrentPage;
