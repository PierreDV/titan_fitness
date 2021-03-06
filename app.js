var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homepageRouter = require('./routes/homepage');
var whyTitanRouter = require('./routes/why_titan');
var tariffsRouter = require('./routes/tariffs');
var philosophyRouter = require('./routes/philosophy');
var facilitiesRouter = require('./routes/facilities');
var contactRouter = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// redirect to https in production
if(app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var reqType = req.headers["x-forwarded-proto"];
    reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
  });
}

app.use('/', homepageRouter);
app.use('/why_titan', whyTitanRouter);
app.use('/tariffs', tariffsRouter);
app.use('/philosophy', philosophyRouter);
app.use('/facilities', facilitiesRouter);
app.use('/contact', contactRouter);

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
