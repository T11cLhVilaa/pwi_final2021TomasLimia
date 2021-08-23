const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv");
const session = require("express-session")
const {verifyUser, verifyAdmin} = require("./middlewares/auth")

dotenv.config();
//ALL
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usuarios = require('./routes/usuarios');
const registro = require('./routes/registro');
const login = require('./routes/login');
const animes = require('./routes/animes');

//ADMIN
const adminIndex = require('./routes/admin/index');
const adminUsuarios = require('./routes/admin/usuarios');
const adminAnimes = require('./routes/admin/animes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "passSecret",
  cookie: {maxAge: null},
  resave: true,
  saveUninitialized: false
}))

//ALL
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registro', registro);
app.use('/login', login);
app.use('/animes', animes);

//USERS
app.use('/usuarios', verifyUser, usuarios);

//ADMIN
app.use('/admin', verifyAdmin, adminIndex);
app.use('/admin/usuarios', adminUsuarios);
app.use('/admin/animes', adminAnimes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
