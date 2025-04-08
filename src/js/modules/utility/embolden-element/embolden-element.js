// This is passed a html element and wraps a `strong` tag around it.
const emboldenElement = element => {
  if (element === null) return;
  const elParent = element.parentElement;
  const highlightElement = document.createElement('strong');
  elParent.insertBefore(highlightElement, element);
  highlightElement.appendChild(element);
};

export default emboldenElement;
