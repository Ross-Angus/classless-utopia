import emboldenElement from '../../../utility/embolden-element/embolden-element.js';

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

    // We need the link which is inside the `li` but not any of the
    // sub-navigation links. Sometimes the link is wrapped in a
    // `strong` tag if it represents the current page.
    let link = listItem.querySelector(':scope > a');
    if (link === null) link = listItem.querySelector(':scope > strong a');
    if (link === null) return;

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


  // At this point, the real navigation has already been created and
  // the current page (and top level section) has been highlighted.
  // We need to discover what the highlighted top level section is
  // and replicate the highlight in the spacer nav.
  const spacerNavLinks = spacerUl.querySelectorAll('a');
  // The highlighted top level link in the real navigation
  const topLevelLink = ul.querySelector(':scope > li > strong a');
  if (topLevelLink !== null) {
    for (const link of spacerNavLinks) {
      if (link.innerText === topLevelLink.innerText) {
        emboldenElement(link);
        break;
      }
    }
  }
  ul.insertAdjacentElement("beforebegin", spacerUl);
};

export default generateSpacerNav;
