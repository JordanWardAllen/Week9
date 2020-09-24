const express = require('express');
const app = express();
const cors = require('cors');
const http = require("http").Server(app);
const io = require('socket.io')(http);
const socket = require('./socket')
const server = require('./listen');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

socket.connect(io, PORT);
server.listen(http, PORT);

// app.use(express.static(path.join(__dirname , "/../dist/chat")));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/../dist/index');
});




const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
// const url = 'mongodb://localhost:4200/mydb';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err)} else { console.log('database created!')}
    const dbName = 'mydb';
    const db = client.db(dbName);
    var querycb = require('./querycallback.js');

    querycb.updatedata(db, function(res){
        console.log(res)
    })


});