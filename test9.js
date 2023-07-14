/*var fs = require('fs');

//Delete the file mynewfile2.txt:
fs.unlink('file3.txt', function (err) {
  if (err) throw err;
  console.log('File is deleted!!!');
});
*/

/*var fs = require('fs');

fs.rename('file2.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File is Renamed!!!');
});*/

const fs = require('fs');
const path = require('path');
const directory = './';

// use readdir method to read the files of the direcoty 
fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    // get the details of the file 
    let fileDetails = fs.lstatSync(path.resolve(directory, file));
    // check if the file is directory 
    if (fileDetails.isDirectory()) {
      console.log('Directory: ' + file);
    } else {
      console.log('File: ' + file);
    }
  });
});