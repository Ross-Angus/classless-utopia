import path from "node:path";

export default function getDistPath(filePath) {

  const trimPath = thisPath => thisPath.replace('src', '');

  // The path from the root of the Node application to the filename of the image
  const dirName = path.dirname(filePath).replaceAll('\\', '/');
  // The image name, plus file extension
  const baseName = path.basename(filePath);
  // The image file extension
  const extName = path.extname(filePath);
  // The path to the source image, minus the `src` bit
  const subPath = trimPath(dirName);
  // The name of the image, without the file extension
  const fileName = baseName.replace(extName, '');
  const distPath = `./dist${subPath}`;
  return {
    distPath,
    fileName,
    extName
  }
};
