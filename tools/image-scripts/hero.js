import fs from "node:fs";
import sharp from "sharp";
import getDistPath from "../get-dist-path.js";
import constants from "../../src/js/modules/constants.js";

// This generates the hero images for the hero panel
const hero = (path) => {
  const { distPath, fileName } = getDistPath(path);

  !fs.existsSync(distPath) && fs.mkdirSync(distPath, { recursive: true });

  const largeImg = sharp(path).resize({
    width: constants.HERO_IMG_LG,
    height: Math.round((constants.HERO_IMG_LG * 9) / 16),
  });

  largeImg.avif().toFile(`${distPath}/lg-${fileName}.avif`);
  largeImg.webp().toFile(`${distPath}/lg-${fileName}.webp`);
  largeImg.jpeg().toFile(`${distPath}/lg-${fileName}.jpg`);

  const mediumImg = sharp(path).resize({
    width: constants.HERO_IMG_MD,
    height: Math.round((constants.HERO_IMG_MD * 9) / 16),
  });

  mediumImg.avif().toFile(`${distPath}/md-${fileName}.avif`);
  mediumImg.webp().toFile(`${distPath}/md-${fileName}.webp`);
  mediumImg.jpeg().toFile(`${distPath}/md-${fileName}.jpg`);

  const smallImg = sharp(path).resize({
    width: constants.HERO_IMG_SM,
    height: constants.HERO_IMG_SM,
  });

  smallImg.avif().toFile(`${distPath}/sm-${fileName}.avif`);
  smallImg.webp().toFile(`${distPath}/sm-${fileName}.webp`);
  smallImg.jpeg().toFile(`${distPath}/sm-${fileName}.jpg`);
};

export default hero;
