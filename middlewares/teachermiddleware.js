const { verify, decode } = require('jsonwebtoken');

module.exports.validateTokenTeacher = (req, res, next) => {
  const accessToken = req.cookies['access-token'];
  if (!accessToken)
    return res.status(400).json({ error: 'user not authenticated' });

  try {
    const validToken = verify(accessToken, 'toddleBackend');
    if (validToken && decode(accessToken).type == 'teacher') {
      req.authenticated = true;
      req.body.teacherId = decode(accessToken).id;
      return next();
    }
    res.status(400).send('authorization failed');
  } catch (error) {
    res.status(400).send(error);
  }
};
