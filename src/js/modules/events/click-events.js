import handleBtnClick from "./handle-button-click/handle-btn-click.js";

// Capturing clicks on buttons
const clickEvents = () => {
  document.body.addEventListener("click", (event) => {
    const clickee = event.target;
    if (clickee.closest('button') !== null) {
      handleBtnClick(clickee.closest('button'));
    }
  });
}

export default clickEvents;
