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

  // Just the top level list items
  const topLevelListItems = ul.querySelectorAll(':scope > li');

  topLevelListItems.forEach(listItem => {
    const li = document.createElement('li');
    const link = listItem.querySelector(':scope > a');
    const subNav = listItem.querySelector(':scope > ul');
    // If the current item has sub-navigation, we need to add a dummy
    // button, so the spacing of the spacer navigation will be the same
    // as for the real navigation
    const hasSubNav = subNav !== null;
    const cloneLink = link.cloneNode(true);

    // This is the dummy button - it doesn't have any function other
    // than to take up space. Adding `type="button"` ensures it won't
    // accidentally submit any forms it happens to be inside.
    const dummyButton = document.createElement('button');
    dummyButton.setAttribute('type', 'button');

    li.appendChild(cloneLink);
    hasSubNav && li.appendChild(dummyButton);
    spacerUl.appendChild(li);
  });
  ul.insertAdjacentElement("afterend", spacerUl);
};

export default generateSpacerNav;
