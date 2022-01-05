const fs = require('fs');


function writeFile(pageHTML) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve('Team profile HTML file successfully created in dist folder');
    });
  });
}

function copyFile() {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/sample.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve('Stylesheet successfully copied to dist folder');
    });
  });
}

module.exports = { writeFile, copyFile };