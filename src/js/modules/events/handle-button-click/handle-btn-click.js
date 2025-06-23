import toggleMainNavigation from "../../navigation/main/generate-burger-buttons/toggle-main-navigation.js";
import toggleSubNavigation from "../../navigation/main/sub-navigation/toggle-sub-navigation.js";
import toggleDialog from "../../dialog/toggle-dialog.js";

// The user has clicked on some kind of button.
const handleBtnClick = btn => {
  const type = btn.getAttribute('data-js');
  const id = btn.getAttribute('aria-controls');

  if (type && id) {

    // This burger button controls toggling of the main navigation
    if (type === 'mainnav-toggle') {
      id && toggleMainNavigation(btn, id);
    }

    // This particular button controls toggling of the sub navigation
    else if (type === 'subnav-toggle') {
      id && toggleSubNavigation(btn, id);
    }

    // The user has clicked on a button which spawns a dialog box
    else if (type == 'toggle-dialog') {
      toggleDialog(id);
    }

  }
};

export default handleBtnClick;
