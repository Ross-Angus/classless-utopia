import constants from "../../../constants.js";
import { getFocusable } from "../../../utility/toggle-focus/toggle-focus.js";

// This is passed a matching set of navigation plus trigger button
// and sets them up to be hidden
const hideSubNavigation = (btn, subNav) => {
    Object.entries({
      'hidden': ''
    }).forEach(([key, value]) => {
      subNav.setAttribute(key, value);
    });

    Object.entries({
      'aria-expanded': 'false',
      'aria-label': constants.OPEN_SUBNAV_STRING,
      'title': constants.OPEN_SUBNAV_STRING
    }).forEach(([key, value]) => {
      btn.setAttribute(key, value);
    });

    // Remove the ability to focus
    getFocusable(subNav, false);

};

export default hideSubNavigation;
