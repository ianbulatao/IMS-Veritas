const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// require('./public/js/db.js')
//paths for static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'IMS/dist/')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Send Views
app.get( '*' , (req,res,err) => {
  res.sendFile(index.html);
});
app.get('/dashboard', function(req,res){
  res.send(index.html);
});
app.get('/supplier', function(req,res){
  res.send(index.html);
});

app.listen(80, '10.10.10.135', function() {
  console.log("listening on port: 10.10.10.135");
})
