const fs = require('fs');
const path = require('path');

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

exports.job = async () => {
  await delay(5000);
  const folderName = 'docs';
  const folderPath = path.join(__dirname, folderName);

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => path.extname(file) !== '');

  for (const file of files) {
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, '../newDocs', file);

    fs.renameSync(oldPath, newPath);
  }
};
