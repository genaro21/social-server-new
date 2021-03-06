const models = require('../models');
const utils = require('../utils');
const jwt = require('jsonwebtoken');
const config = require('../config');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await models.user.findOne({ email });
    if (!user) {
      return res.json('Usuario no encontrado');
    }
    const isValid = utils.bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.json('Usuario no encontrado');
    }

    const token = jwt.sign({ user }, config.jwt.secret);

    return res.json({ token });
  } catch (err) {
    return res.json(err);
  }
};

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hostname = 'http://localhost:4600/';
    const hash = await utils.bcrypt.encrypt(password);
    const file = req.file;

    const user = {
      avatar: hostname + file.filename,
      email,
      password: hash,
    };

    const data = await models.user.create(user);
    return res.status(201).json({ data });
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  signIn,
  signUp,
};
