const fs = require('fs');

function compareFiles(file1, file2) {
  const content1 = fs.readFileSync(file1, 'utf-8');
  const content2 = fs.readFileSync(file2, 'utf-8');

  const largerFile = content1.length >= content2.length ? file1 : file2;

  if (content1 === content2) {
    console.log('The files have identical content.');
  } else {
    console.log(`The larger file is: ${largerFile}`);

    const lines1 = content1.split('\n');
    const lines2 = content2.split('\n');

    console.log('Differing lines:');
    for (let i = 0; i < Math.min(lines1.length, lines2.length); i++) {
      if (lines1[i] !== lines2[i]) {
        console.log(`Line ${i + 1}`);
      }
    }
  }
}

// Usage example
const file1 = 'file1.txt';
const file2 = 'file2.txt';

compareFiles(file1, file2);
