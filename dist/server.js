'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

//view engine setup
server.set('views', _path2.default.join(__dirname, 'views'));
server.set('view engine', 'pug');

//middleware
server.use('/', _express2.default.static(_path2.default.join(__dirname, 'public')));
server.use(_bodyParser2.default.urlencoded({ extended: true }));

//routes
server.use('/', _index2.default);

server.listen(process.env.PORT || 3000);