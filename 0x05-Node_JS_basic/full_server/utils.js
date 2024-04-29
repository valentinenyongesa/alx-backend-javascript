// full_server/utils.js

const fs = require('fs').promises;

/**
 * Reads the database asynchronously and returns an object of arrays of first names per fields.
 * @param {string} filePath The path to the database file.
 * @returns {Promise<object>} A promise that resolves with an object of arrays of first names per fields.
 */
async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = { CS: [], SWE: [] };

    lines.forEach((line) => {
      const [, firstName, , field] = line.split(',');
      if (['CS', 'SWE'].includes(field)) {
        students[field].push(firstName);
      }
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
