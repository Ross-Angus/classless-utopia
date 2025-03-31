import { argv } from "node:process";
import getDistPath from "./get-dist-path.js";
import callPostHTML from "./call-posthtml.js";
import generateAllHTML from "./generate-all-html.js";

// Destructuring the Array from Node which includes data we need
const [node, thisFile, srcPath, fileEvent] = argv;

// If this script is called with no arguments, rebuild all HTML files
typeof srcPath === "undefined" && typeof fileEvent === "undefined" && generateAllHTML();

// White-list of events which should cause PostHTML to rebuild pages
const triggerEvents = ['add', 'change'];

// If the wrong kind of event triggers this script, do nothing
if (triggerEvents.includes(fileEvent)) {

  const { distPath, fileName, extName } = getDistPath(srcPath);
  const editedSrcPath = srcPath.replaceAll('\\', '/');
  const editedDistPath = distPath.replace('/views', '');
  // Do we need to rebuild all HTML files?
  const rebuildAll = editedSrcPath.indexOf('fragments') > -1;

  if (rebuildAll) {
    generateAllHTML();
    console.log(`Fragment ${fileEvent === 'add' ? "added" : "changed"} successfully`);
  } else {
    callPostHTML(editedSrcPath, `${editedDistPath}/${fileName}${extName}`);
    console.log(`HTML page ${fileEvent === 'add' ? "added" : "changed"} successfully`);
  }
}
