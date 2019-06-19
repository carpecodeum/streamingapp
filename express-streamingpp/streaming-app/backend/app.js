var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var mongostore = require('connect-mongo')(session);
const expressLayouts = require('express-ejs-layouts');
const expressValidator = require('express-validator');
const passport = require('passport');
var indexRouter = require('/Users/adityabhatnagar1/streamingapp/express-streamingpp/streaming-app/backend/routes/index');
var usersRouter = require('/Users/adityabhatnagar1/streamingapp/express-streamingpp/streaming-app/backend/routes/users');

mongoose.connect('mongodb://localhost/auth', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(expressValidator({
  errorformatter: function(param,msg,value){
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
    while(namespace.length){
      formParam += '[' +namespace.shift + ']'
    }
    return{
    param : formParam,
    msg : msg,
    alue :  value
    };
  } 
}));

app.use(function(res,req,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new mongostore({
    mongooseConnection: db
  })
}))

app.set('port',(process.env.PORT || 8081));

app.listen(app.get('port'), function(){
  console.log("server started " +app.get('port'));
});
