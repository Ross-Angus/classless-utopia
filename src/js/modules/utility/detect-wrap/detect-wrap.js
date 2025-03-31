import debounce from '../debounce/debounce.js';

// This is passed an element and returns an approximation of how many times
// the current text inside the element wraps
// Assumption: the element passed doesn't feature a mix of content, for example
// h1, ul, li, p. If this is done, it will return how many times plane text
// will wrap inside the element, rather than the original mix of block elements
const lineNumbers = (element) => {
  const elementStyles = window.getComputedStyle(element);

  // As clientHeight contained the padding top and bottom values, we need
  // to extract this information to remove it from the calculation
  const paddingTop = parseInt(elementStyles.getPropertyValue("padding-top"), 10);
  const paddingBottom = parseInt(elementStyles.getPropertyValue("padding-bottom"), 10);

  // Let's save this for later
  const currentContent = element.innerHTML;
  const contentHeight = element.clientHeight - paddingTop - paddingBottom;

  // Replace the content (temporarily!) with something which won't wrap
  element.innerHTML = "i";

  // Measure the height and store it
  const lineHeight = element.clientHeight - paddingTop - paddingBottom;

  // Put that content right back
  element.innerHTML = currentContent;

  // Approximation of how many times the line is wrapping
  return Math.round(contentHeight / lineHeight);
};

// Let's not stress the browser any more than is necessary
const checkForWrap = debounce((elements) => {
  elements.forEach((element) => {
    element.setAttribute("data-wrap", lineNumbers(element));
  });
}, 100);

const detectWrap = (selector = '[data-js="detect-wrap"]') => {
  window.addEventListener("resize", () => {
    // You could pass any selector you like
    checkForWrap(document.querySelectorAll(selector));
  });

  // Rather than calling checkForWrap() a second time, dispatch a resize event
  // to trigger it naturally
  window.dispatchEvent(new Event("resize"));
};

export default detectWrap;
