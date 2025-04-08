import constants from '../../../constants.js';

// This adds in a toggle button and updates the markup of sub navigation
const subnavSetup = (anchor, subNav, index) => {
  if (anchor === null || subNav === null) return;
  const menuName = anchor.innerText;
  const openString = `Open ${menuName} ${constants.SUBNAV_NAME}`;
  const triggerButton = document.createElement('button');
  const id = `subnav-${index}`;
  // Set of attributes to add to the button which toggles the visibility
  // of the sub-navigation
  Object.entries({
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': id,
    'aria-label': openString,
    title: openString,
    'data-js': 'subnav-toggle'
  }).forEach(([key, value]) => {
    triggerButton.setAttribute(key, value);
  });

  // The button is added before the anchor tag in order to leverage
  // CSS sibling selectors to highlight when a particular node is
  // open or closed
  anchor.insertAdjacentElement("afterend", triggerButton);

  Object.entries({
    id: id,
    hidden: '',
    'aria-label': `${menuName} ${constants.SUBNAV_NAME}`
  }).forEach(([key, value]) => {
    subNav.setAttribute(key, value);
  });
};

export default subnavSetup;
