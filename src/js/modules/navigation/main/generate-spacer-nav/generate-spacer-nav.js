// This generates a version of the top level navigation only which
// is hidden visually and from the accessibility DOM. Its purpose
// is to determine exactly when the navigation wraps and then switch
// to a hamburger navigation.
const generateSpacerNav = (ul, index) => {
  if (ul === null) return;
  const spacerUl = document.createElement('ul');
  Object.entries({
    'data-js': 'spacer-nav',
    'aria-hidden': 'true',
    id: `spacer-${index}`
  }).forEach(([key, value]) => {
    spacerUl.setAttribute(key, value);
  });

  // Just the top level navigation links
  const topLevelAnchors = ul.querySelectorAll(':scope > li > a');

  topLevelAnchors.forEach(link => {
    const li = document.createElement('li');
    const cloneLink = link.cloneNode(true);
    li.appendChild(cloneLink);
    spacerUl.appendChild(li);
  });
  ul.insertAdjacentElement("afterend", spacerUl);
};

export default generateSpacerNav;
