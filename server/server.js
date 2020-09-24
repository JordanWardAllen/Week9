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


// app.get('/api/createProduct', function(req, res){
//     console.log('test button fired')
//     res.sendFile(__dirname + '/../dist/index');
// });


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';


MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err)} else { console.log('database created!')}
    const dbName = 'mydb';
    const db = client.db(dbName);

    // app.get('/api/createProduct', function(req, res){
    //     var querycb = require('./read.js');
    //     querycb.updatedata(db, function(res){
    //         console.log(res)
    //         // client.close()
    //     })
    // });
    
    var readQuery = require('./read.js');
    readQuery.finddata(db, function(res){
        console.log(res)
        client.close()
    })

    // var removeQuery = require('./remove.js');
    // removeQuery.removedata(db, "1", function(res){
    //     client.close()
    // })

    // var addQuery = require('./add.js');
    // addQuery.adddata(db, "1", 3, function(res){
    //         console.log(res)
    //     client.close()
    // })

    // var updateQuery = require('./update.js');
    // updateQuery.updatedata(db, "2", 7, function(res){
    //     console.log(res)
    //     client.close()
    // })
    
    
});
