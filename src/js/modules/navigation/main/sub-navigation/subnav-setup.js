import constants from '../../../constants.js';

// This adds in a toggle button and updates the markup of sub navigation
const subnavSetup = (anchor, subNav, index) => {
  if (anchor === null || subNav === null) return;
  const triggerButton = document.createElement('button');
  // Set of attributes to add to the button which toggles the visibility
  // of the sub-navigation
  Object.entries({
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': `nav-${index}`,
    'aria-label': constants.OPEN_STRING,
    title: constants.OPEN_STRING,
    'data-js': 'subnav-toggle'
  }).forEach(([key, value]) => {
    triggerButton.setAttribute(key, value);
  });

  anchor.insertAdjacentElement("afterend", triggerButton);

  Object.entries({
    id: `nav-${index}`,
    hidden: ''
  }).forEach(([key, value]) => {
    subNav.setAttribute(key, value);
  });
};

export default subnavSetup;
