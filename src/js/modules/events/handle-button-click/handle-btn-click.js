import toggleSubNavigation from "../../navigation/main/sub-navigation/toggle-sub-navigation.js";

// The user has clicked on some kind of button.
const handleBtnClick = btn => {
  const type = btn.getAttribute('data-js');
  if (type) {
    // This particular button controls toggling of the sub navigation
    if (type === 'subnav-toggle') {
      const id = btn.getAttribute('aria-controls');
      id && toggleSubNavigation(btn, id);
    }
  }
};

export default handleBtnClick;
