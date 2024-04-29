// 2-read_file.js

const fs = require('fs');

/**
 * Counts the number of students in each field from the database CSV file.
 * @param {string} path The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the contents of the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines
    const lines = data.split('\n');

    // Initialize counters for each field
    const counters = {};

    // Iterate over each line and count students in each field
    lines.forEach((line) => {
      // Skip empty lines
      if (line.trim() === '') return;

      // Split the line into fields
      const [, , , field] = line.split(',');

      // Increment the counter for the field
      counters[field] = (counters[field] || 0) + 1;
    });

    // Log the total number of students
    console.log(`Number of students: ${lines.length - 1}`);

    // Log the number of students in each field and their names
    Object.entries(counters).forEach(([field, count]) => {
      const students = lines
        .filter((line) => line.includes(field))
        .map((line) => line.split(',')[0]);
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    // Throw an error if the database file cannot be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
