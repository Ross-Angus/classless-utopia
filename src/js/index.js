import addEmoji from "./modules/add-emoji/add-emoji.js";

// Will add `😊` after the opening `body` tag
addEmoji();
// Will add `🪱` inside the first `p` tag on the page
addEmoji('🪱', 'p');
// Will not find a `section` tag on the page and silently fail
addEmoji('😈', 'section');
