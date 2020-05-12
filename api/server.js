'use strict';

const express = require('express');
var MongoClient = require('mongodb').MongoClient
var bodyParser     =        require("body-parser");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('public'));
app.use(function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
res.setHeader('Access-Control-Allow-Credentials', true);
next();
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ranks', (req, res) => {
MongoClient.connect('mongodb://mongo:27017/admin', function (err, client) {
    if (err) throw err
    var db = client.db('admin')
    db.collection('ranks').find().toArray(function (err, result) {
        if (err) throw err
          console.log(result);
          return res.send(result);
      })
})


  //res.send({"name": "prabhakar"});
});


app.post('/ranks', (req, res) => {
    // We will be coding here
    const user = req.body;

    MongoClient.connect('mongodb://mongo:27017/admin', function (err, client) {
    if (err) throw err
    var db = client.db('admin')
    db.collection("ranks").insertOne(user, function(err, res) {
        if (err) throw err
          console.log("1 document inserted");
      })
res.end("yes");
})


    console.log(user);

});


app.get('/multiplication', (req, res) => {
MongoClient.connect('mongodb://mongo:27017/admin', function (err, client) {
    if (err) throw err
    var db = client.db('admin')
    db.collection('multiplication').find().toArray(function (err, result) {
        if (err) throw err
          console.log(result);
          return res.send(result);
      })
})

});

app.post('/multiplication', (req, res) => {
    // We will be coding here
    const user = req.body;

    MongoClient.connect('mongodb://mongo:27017/admin', function (err, client) {
    if (err) throw err
    var db = client.db('admin')
    db.collection("multiplication").insertOne(user, function(err, res) {
        if (err) throw err
          console.log("1 document inserted");
      })
res.end("yes");
})
    console.log(user);
});


app.get('/images', (req, res) => {
MongoClient.connect('mongodb://mongo:27017/admin', function (err, client) {
    if (err) throw err
    var db = client.db('admin')
    db.collection('images').find().toArray(function (err, result) {
        if (err) throw err
          console.log(result);
          return res.send(result);
      })
})

});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


