import constants from '../../../constants.js';

const generateBurgerButtons = (ul, index) => {
  if (ul === null) return;
  const burgerButton = document.createElement('button');
  const id = `mainnav-${index}`;
  // Set of attributes to add to the button which toggles the visibility
  // of the main-navigation
  Object.entries({
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': id,
    'aria-label': constants.OPEN_MAINNAV_STRING,
    title: constants.OPEN_MAINNAV_STRING,
    'data-js': 'mainnav-toggle'
  }).forEach(([key, value]) => {
    burgerButton.setAttribute(key, value);
  });

  ul.insertAdjacentElement("afterend", burgerButton);
  ul.setAttribute('id', id);

};

export default generateBurgerButtons;
