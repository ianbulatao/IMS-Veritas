var dataB = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sample";
var dbo;

dataB.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("sample");
  dbo.createCollection("samples", function(err, res) {
    if (err) throw err;
    console.log("success");
    // Insert();
    db.close();
  })
});

// //functions
// function Insert(err, res) {
//   var send = { name: "Pilot", type: "BALLPEN"};
//   dbo.collection("Products").insertOne(send, function(err, res) {
//     if(err) throw err;
//     console.log("Again success");
//   })
//
