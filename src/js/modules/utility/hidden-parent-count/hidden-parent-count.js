// This is passed an element and recursively traverses up the DOM, keeping
// a running count on how many of its parent have the attribute `hidden`.
// This count is returned.
// This function was written to solve an edge case where users wanted to
// show one level of navigation while hiding the sub-levels under it.
const hiddenParentCount = (element) => {
  let hiddenParentNo = 0;
  let el = element;
  while (el.parentNode.tagName !== undefined) {
    if (el.parentNode.hasAttribute('hidden')) hiddenParentNo += 1;
    el = el.parentNode;
  }
  return hiddenParentNo;
};

export default hiddenParentCount;
