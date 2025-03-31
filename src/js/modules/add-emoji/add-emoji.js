export default addEmoji = (emoji = '😊', selector = 'body') => {
  const element = document.querySelector(selector);
  element && element.insertAdjacentHTML('afterbegin', `<big>${emoji}</big>`);

};
