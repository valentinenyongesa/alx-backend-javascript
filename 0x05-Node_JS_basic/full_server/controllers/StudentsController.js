// full_server/controllers/StudentsController.js

const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.databasePath);
      res.status(200).send(`This is the list of our students\nNumber of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\nNumber of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const students = await readDatabase(req.databasePath);
      const { major } = req.params;

      if (!['CS', 'SWE'].includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      res.status(200).send(`List: ${students[major].join(', ')}\n`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
