import { argv } from "node:process";
import writeImages from "./write-images.js";
import hero from "./image-scripts/hero.js";

// Destructuring the Array from Node which includes data we need
const [node, thisFile, filePath, fileEvent] = argv;
// White-list of events which should cause Sharp to generate images
const triggerEvents = ['add', 'change'];

// If the wrong kind of event triggers this script, do nothing
if (triggerEvents.includes(fileEvent)) {
  const checkPath = filePath.replaceAll('\\', '/');

  // Each special handling script uses a different path to trigger it
  if (checkPath.includes('src/img/hero/')) {
    // Hero images special case
    hero(checkPath);
  } else {
    writeImages(filePath);
  }
}
