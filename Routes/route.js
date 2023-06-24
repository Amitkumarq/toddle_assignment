const express = require('express');
const router = express.Router();

const studentmiddleware = require('../middlewares/studentmiddleware');
const teachermiddleware = require('../middlewares/teachermiddleware');
const teacher = require('../Controllers/teacherController');
const student = require('../Controllers/studentController');
const auth = require('../Controllers/authentication');

router.post('/register', auth.register);
router.get('/login/:username/:password/:type', auth.loginUser);
router.post(
  '/addjournal',
  teachermiddleware.validateTokenTeacher,
  teacher.addJournal
);
router.delete(
  '/deletejournal/:journalId',
  teachermiddleware.validateTokenTeacher,
  teacher.deleteJournal
);
router.put(
  '/updatejournal/:journalId',
  teachermiddleware.validateTokenTeacher,
  teacher.updateJournal
);
router.get(
  '/teacherfeed',
  teachermiddleware.validateTokenTeacher,
  teacher.teacherFeed
);

router.post(
  '/tagstudent',
  teachermiddleware.validateTokenTeacher,
  student.tagStudent
);
router.get(
  '/getstudentfeed/:studentId',
  studentmiddleware.validateTokenStudent,
  student.studentFeed
);

module.exports = router;
