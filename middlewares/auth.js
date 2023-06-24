const { sign } = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

module.exports.createTokens = (user) => {
  const accessToken = sign({ id: user.id, type: user.type }, secretKey);

  return accessToken;
};
