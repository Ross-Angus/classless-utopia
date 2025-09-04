import toggleTab from "../../navigation/tabs/toggle-tab.js";

// The user has clicked on an attribute with an aria-controls attribute.
const handleAriaClick = (el) => {
  const targetId = el.getAttribute("aria-controls");
  const clickId = el.getAttribute("id");
  const role = el.getAttribute("role");

  if (targetId && clickId && role) {
    if (role === "tab") {
      toggleTab(clickId, targetId);
      event.preventDefault();
    }
  }
};

export default handleAriaClick;
