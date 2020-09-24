module.exports = function(app, db){

    app.post('/api/createProduct', (req, res) => {
        const assert = require('assert');

        var productName = req.body.productName.toString();
        // var pwd = req.body.password.toString();
        const collection = db.collection('credentials');

        collection.find({'productName': productName}).count(function(err, count){

        })
            assert.strictEqual(null,err);

            if (count > 0){
                res.send({"productName" : productName, 'success': true});
            } else {
                res.send({"productName" : productName, "success" : true});
            }        
    })
}