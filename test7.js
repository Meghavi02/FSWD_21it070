const fs = require('fs');
const path = require('path');

function createBackup(filePath) {
  const fileContent = fs.readFileSync(filePath);
  const backupFilePath = filePath;

  fs.writeFileSync(backupFilePath, fileContent);
  console.log(`Backup created: ${backupFilePath}`);
}

function restoreBackup(backupFilePath) {
  const filePath = backupFilePath.replace('.bak', '');
  const backupContent = fs.readFileSync(backupFilePath);

  fs.writeFileSync(filePath, backupContent);
  console.log(`Backup restored: ${filePath}`);
}

// Usage example
const fileToBackup = 'file1.txt';

// Create a backup
createBackup(fileToBackup);

// Simulate changes to the original file
fs.appendFileSync(fileToBackup, '\nNew line added.');

// Restore from backup
const backupFile = fileToBackup + '.bak';
restoreBackup(backupFile);
