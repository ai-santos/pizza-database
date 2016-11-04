'use strict';

// import express from 'express'
// import routes from './routes/index'
// import pug from 'pug'
// import path from 'path'
// import bodyParser from 'body-parser'

var express = require('express');
var routes = require('./routes/index');
var pug = require('pug');
var path = require('path');
var bodyParser = require('body-parser');

var server = express();

//view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

//middleware
server.use('/', express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));

//routes
server.use('/', routes);

server.listen(process.env.PORT || 3000);
