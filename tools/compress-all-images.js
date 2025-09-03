import getFiles from "./get-files.js";
import writeImages from "./write-images.js";
import hero from "./image-scripts/hero.js";

const allImagePaths = getFiles("./src/img");

allImagePaths.map((path) => {
  const trimPath = path.replace("./", "");
  const checkPath = trimPath.replaceAll("\\", "/");

  // Each special handling script uses a different path to trigger it
  if (checkPath.includes("src/img/hero/")) {
    // Hero images special case
    hero(checkPath);
  } else {
    writeImages(trimPath);
  }
});
