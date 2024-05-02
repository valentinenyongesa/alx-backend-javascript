const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.trim().split('\n').map((line) => line.split(','));
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student; // Removed unused variables lastname and age
        if (field && field.trim() !== 'field') {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      const totalStudents = students.length - 1;
      console.log(`Number of students: ${totalStudents}`);
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) { // Guard the for-in loop
          const numStudents = fields[field].length;
          console.log(`Number of students in ${field}: ${numStudents}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve();
    });
  })
    .catch((error) => {
      console.error(error.message);
    });
}

module.exports = countStudents;
