module.exports = function(app, db){

    app.post('/api/auth', (req, res) => {
        const assert = require('assert');

        var uname = req.body.username.toString();
        var pwd = req.body.password.toString();
        const collection = db.collection('credentials');

        collection.find({'username': uname, 'password': pwd}).count(function(err, count){

        })
            assert.strictEqual(null,err);

            if (count > 0){
                res.send({"username" : uname, 'success': true});
            } else {
                res.send({"username" : uname, "success" : true});
            }        
    })
}