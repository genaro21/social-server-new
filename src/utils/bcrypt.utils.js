const bcrypt = require('bcrypt');

encrypt = async (password) => {
  return bcrypt.hash(password, 10);
};

compare = async (passwordPlane, passwordEncrypt) => {
  return bcrypt.compare(passwordPlane, passwordEncrypt);
};

module.exports = {
  encrypt,
  compare,
};
