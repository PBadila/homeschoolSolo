var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var affirmationsRouter = require('./routes/affirmations');
var assignmentsRouter = require('./routes/assignments');
var blogsRouter = require('./routes/blogs');
var calendarsRouter = require('./routes/calendars');
var choresRouter = require('./routes/chores');


var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'P3I6T9A477%',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/affirmations', affirmationsRouter);
app.use('/assignments', assignmentsRouter);
app.use('/blogs', blogsRouter);
app.use('/calendars', calendarsRouter);
app.use('/chores', choresRouter);


module.exports = app;
