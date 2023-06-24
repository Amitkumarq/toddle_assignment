const { db } = require('../db');

module.exports.addJournal = async (req, res) => {
  try {
    const { published, description, attachment, teacherId } = req.body;
    db().query(
      'INSERT INTO journal (description,published,attachment,teacherId) values (?,?,?,?)',
      [description, published, attachment, teacherId],
      (err, result) => {
        if (err) res.status(400).send({ error: 'journal not added' });
        res.status(200).send(result);
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteJournal = async (req, res) => {
  try {
    const journalId = req.params.journalId;
    db().query('DELETE FROM journal where id=?', [journalId], (err, result) => {
      if (err) res.status(500).send('Journal could not be deleted!');
      res.status(200).send(result);
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports.updateJournal = async (req, res) => {
  try {
    const { description, published, attachment, teacherId, journalId } =
      req.body;
    db().query(
      'UPDATE journal SET description=?,published=?,attachment=?,teacherId=? WHERE id=?',
      [description, published, attachment, teacherId, journalId],
      (err, result) => {
        if (err) res.status(400).send(err);
        res.status(200).send(result);
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.teacherFeed = async (req, res) => {
  try {
    const ID = req.body.teacherId;
    db().query(
      'SELECT * from journal where teacherId=?',
      [ID],
      (err, result) => {
        if (err) res.status(400).send(err);
        res.status(200).send(result);
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};
