import handleBtnClick from "./handle-button-click/handle-btn-click.js";
import handleAriaClick from "./handle-aria-click/handle-aria-click.js";

// Capturing clicks on buttons
const clickEvents = (event) => {
  document.body.addEventListener("click", (event) => {
    const clickee = event.target;
    if (clickee.closest("button") !== null) {
      handleBtnClick(clickee.closest("button"));
    } else if (clickee.hasAttribute("aria-controls")) {
      handleAriaClick(clickee, event);
    }
  });
};

export default clickEvents;
