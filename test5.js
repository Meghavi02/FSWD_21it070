const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to save employee data to a file
function saveEmployeeData(employeeData) {
  const jsonData = JSON.stringify(employeeData);

  fs.writeFile('employee-data.json', jsonData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Employee data saved successfully!');
    }
    rl.close();
  });
}

// Prompt the user for employee information
rl.question('Please enter the employee name: ', (name) => {
  rl.question('Please enter the employee age: ', (age) => {
      const employeeData = {
        name: name,
        age: parseInt(age),
      };
      saveEmployeeData(employeeData);
      console.log(employeeData);
  });
});
