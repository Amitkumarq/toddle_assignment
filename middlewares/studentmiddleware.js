const { verify, decode } = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

module.exports.validateTokenStudent = (req, res, next) => {
  const accessToken = req.cookies['access-token'];

  if (!accessToken)
    return res.status(400).json({ error: 'user not authenticated' });

  try {
    const validToken = verify(accessToken, secretKey);
    if (validToken && decode(accessToken).type == 'student') {
      req.authenticated = true;
      req.body.studentId = decode(accessToken).id;
      return next();
    }
    res.status(400).send('authorization failed');
  } catch (error) {
    res.status(500).send(error);
  }
};
