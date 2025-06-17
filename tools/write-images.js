import fs from 'node:fs';
import sharp from "sharp";
import getDistPath from "./get-dist-path.js";

const writeImages = filePath => {
  const { distPath, fileName } = getDistPath(filePath);

  !fs.existsSync(distPath) && fs.mkdirSync(distPath, {recursive: true});

  sharp(filePath)
    .avif()
    .toFile(`${distPath}/${fileName}.avif`);

  sharp(filePath)
    .webp()
    .toFile(`${distPath}/${fileName}.webp`);

  sharp(filePath)
    .jpeg()
    .toFile(`${distPath}/${fileName}.jpg`)

};

export default writeImages;
