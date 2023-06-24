const { createTokens } = require('../middlewares/auth');
const bcrypt = require('bcrypt');
const { db } = require('../db');

module.exports.register = async (req, res) => {
  try {
    const { username, password, type } = req.body;

    await bcrypt.hash(password, 10).then((hash) => {
      db().query(
        'INSERT INTO users (username,password,type) VALUES (?,?,?)',
        [username, hash, type],
        async (err, result) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(200).send(result);
        }
      );
    });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const username = req.params.username;
    const password = req.params.password;
    const type = req.params.type;

    db().query(
      'SELECT * FROM users WHERE username=? AND type=? ',
      [username, type],
      async (err, result) => {
        await bcrypt.compare(password, result[0].password).then((match) => {
          if (!match) {
            return res.status(400).json({ error: 'Wrong credentials' });
          } else {
            const accessToken = createTokens(result[0]);
            res.cookie('access-token', accessToken, {
              maxAge: 60 * 60 * 24 * 1000,
            });
            return res.status(200).send(accessToken);
          }
        });
      }
    );
  } catch (e) {
    return res.status(500).send(e);
  }
};
