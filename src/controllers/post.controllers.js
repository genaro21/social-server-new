const models = require('../models');

const upload = (req, res) => {
  return res.json('upload');
};

const recentUploads = (req, res) => {
  return res.json('recentUploads');
};

const stats = (req, res) => {
  return res.json('stats');
};

const mostPopular = (req, res) => {
  return res.json('mostPopular');
};

const details = (req, res) => {
  return res.json('details');
};

const remove = (req, res) => {
  return res.json('remove');
};

const like = (req, res) => {
  return res.json('like');
};

module.exports = {
  upload,
  recentUploads,
  stats,
  mostPopular,
  details,
  remove,
  like,
};
