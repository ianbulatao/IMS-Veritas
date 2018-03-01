var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
require('./public/js/db.js')
//paths for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
//View engine for ejs
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// given parse application/x-www-form-urlencoded & parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Send Views
app.get('/', function(req,res){
  res.send(index.html);
});
app.get('/dashboard', function(req,res){
  res.send(dashboard.html);
});
app.get('/suppliers', function(req,res){
  res.send(suppliers.html);
});

app.listen(80, '10.10.10.135', function() {
  console.log("listening on port: here");
})
