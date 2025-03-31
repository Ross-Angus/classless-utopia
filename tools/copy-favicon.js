import fs from 'fs';

fs.copyFile("./src/views/favicon.ico", "./dist/favicon.ico", fs.constants.COPYFILE_FICLONE, (err) => {
  if (err) {
    console.error(`Favicon copy error: ${err}`);
    return;
  }
});
