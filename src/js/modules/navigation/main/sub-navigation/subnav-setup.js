import constants from '../../../constants.js';

// This adds in a toggle button and updates the markup of sub navigation
const subnavSetup = (anchor, subNav, index) => {
  if (anchor === null || subNav === null) return;
  const triggerButton = document.createElement('button');
  const id = `subnav-${index}`;
  // Set of attributes to add to the button which toggles the visibility
  // of the sub-navigation
  Object.entries({
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': id,
    'aria-label': constants.OPEN_SUBNAV_STRING,
    title: constants.OPEN_SUBNAV_STRING,
    'data-js': 'subnav-toggle'
  }).forEach(([key, value]) => {
    triggerButton.setAttribute(key, value);
  });

  anchor.insertAdjacentElement("afterend", triggerButton);

  Object.entries({
    id: id,
    hidden: ''
  }).forEach(([key, value]) => {
    subNav.setAttribute(key, value);
  });
};

export default subnavSetup;
