import fs from 'fs';

// An Array of paths which Node needs to copy from `src` to `dist` recursively
const pathArray = ['./src/fonts'];

// Options for `cp()`. See https://nodejs.org/api/fs.html#fscpsrc-dest-options-callback
const options = {
  force: true,
  recursive: true
};

pathArray.forEach((path) => {
  const distPath = path.replace('./src/', './dist/');
  fs.cp(path, distPath, options, (err) => {
    if (err) {
      console.error(`Copy to dist error: ${err}`);
      return;
    }
  });
});
