const fs = require('fs');

// Read the file
fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Process the file data
  const lines = data.split('\n');
  const filteredStudents = [];

  for (let i = 0; i < lines.length; i++) {
    const studentData = lines[i].split(',');

    const name = studentData[0];
    const cgpa = parseFloat(studentData[0]);

    if (name.includes('MA') && cgpa > 7) {
      filteredStudents.push(lines[i]);
    }
  }

  // Output the filtered students
  console.log('Filtered Students:');
  filteredStudents.forEach(student => console.log(student));
  console.log(lines);
});
