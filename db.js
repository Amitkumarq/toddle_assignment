const mysql = require('mysql');

function db() {
  const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.DB_PASSWORD2,
    database: process.env.DATABASE,
  });
  db.query(`CREATE DATABASE IF NOT EXISTS toddle`, (err, result) => {
    if (err) res.status(400).send(err);
  });

  db.query(
    `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL)`,
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      }
    }
  ),
    db.query(
      `CREATE TABLE IF NOT EXISTS journal(
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(200) NOT NULL,
    published DATETIME NOT NULL,
    attachment VARCHAR(45),
    teacherId INT NOT NULL)`,
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
      }
    ),
    db.query(
      `CREATE TABLE IF NOT EXISTS students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    journalId INT NOT NULL)`,
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
      }
    );
  return db;
}

module.exports = { db };
