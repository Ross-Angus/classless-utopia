import handleBtnClick from "./handle-button-click/handle-btn-click.js";
import handleDataClick from "./handle-data-click/handle-data-click.js";

// Capturing clicks on buttons
const clickEvents = () => {
  document.body.addEventListener("click", (event) => {
    const clickee = event.target;
    if (clickee.closest("button") !== null) {
      handleBtnClick(clickee.closest("button"));
    } else if (clickee.hasAttribute("data-js")) {
      handleDataClick(clickee);
    }
  });
};

export default clickEvents;
