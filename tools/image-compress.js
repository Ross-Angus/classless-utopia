import { argv } from "node:process";
import writeImages from "./write-images.js";

// Destructuring the Array from Node which includes data we need
const [node, thisFile, filePath, fileEvent] = argv;
// White-list of events which should cause Sharp to generate images
const triggerEvents = ['add', 'change'];

// If the wrong kind of event triggers this script, do nothing
if (triggerEvents.includes(fileEvent)) {
  writeImages(filePath);
}
