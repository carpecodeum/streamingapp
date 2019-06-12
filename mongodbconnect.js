var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userlogin', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});