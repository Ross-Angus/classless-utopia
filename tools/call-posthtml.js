import { exec } from 'child_process';

export default function callPostHTML(inputFilePath, outputFilePath) {
  exec(`npx posthtml ${inputFilePath} -o ${outputFilePath} -c posthtml.json`, (err) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
  });
};
