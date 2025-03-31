// Pinched from here: https://amitd.co/code/typescript/debounce
const debounce = (callback, timeout) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

export default debounce;
