const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// require('./public/js/db.js')
//paths for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Send Views
app.get( '/' , (req,res) => {
  res.render(login.html);
});
// app.get('/home/dashboard', function(req,res){
//   res.send(dashboard.html);
// });
// app.get('/home/suppliers', function(req,res){
//   res.send(suppliers.html);
// });

app.listen(80, '10.10.10.135', function() {
  console.log("listening on port: 10.10.10.135");
})
