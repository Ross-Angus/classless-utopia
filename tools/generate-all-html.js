import getFiles from "./get-files.js";
import callPostHTML from "./call-posthtml.js";

const generateAllHTML = () => {
  const allHTMLPaths = getFiles('./src/views');

  allHTMLPaths.map((path) => {
    const inputPath = path.replace('./', '');
    const outputPath = inputPath.replace('views/', '').replace('src/', 'dist/');
    callPostHTML(inputPath, outputPath);
  });
};

export default generateAllHTML;
