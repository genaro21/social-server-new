const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const path = require('path');

const server = express();

//Settings.
server.set('port', 4600);

//Middlewares.
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes.
server.use('/api/user', routes.user);
server.use('/api/post', routes.post);
server.use('/api/comment', routes.comment);

//Static folder.
server.use(express.static(path.join(__dirname, 'statics')));

module.exports = server;
