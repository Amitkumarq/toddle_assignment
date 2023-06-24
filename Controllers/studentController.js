const { db } = require('../db');

module.exports.studentFeed = () => {
  try {
    const studentId = req.body.studentId;
    db().query(
      'SELECT journalId FROM students WHERE student_id=?',
      [studentId],
      (err, result) => {
        db().query(
          `SELECT * FROM journal where id in (?) and published <= ${Date.now()} `,
          [result],
          (err, result) => {
            if (err) res.send(400).send('could not complete query');
            res.status(200).send(result);
          }
        );
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.tagStudent = async (req, res) => {
  try {
    const { student_id, journalId } = req.body;

    db().query(
      'SELECT * FROM students WHERE student_id=? AND journalId = ?',
      [student_id, journalId],
      (err, result) => {
        if (err) {
          console.error('Error executing SELECT query:', err);
          return;
        }

        if (result.length > 0) res.send('Student already tagged', result[0]);
        else {
          db().query(
            'INSERT INTO students (student_id,journalId) values (?,?)',
            [student_id, journalId],
            (err, result) => {
              if (err) res.status(400).json({ error: 'data not posted' });
              res.status(200).send(result);
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};
