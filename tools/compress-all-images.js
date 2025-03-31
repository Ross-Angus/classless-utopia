import getFiles from "./get-files.js";
import writeImages from "./write-images.js";

const allImagePaths = getFiles('./src/img');

allImagePaths.map((path) => {
  const trimPath = path.replace('./', '');
  writeImages(trimPath);
});
