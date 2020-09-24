const fs = require('fs');


module.exports = function(db, app){
    app.get('/api/read', function(req, res){
        const collection = db.collection('products');
        collection.find({}).toArray((err, data) =>{
            if (err){
                console.log(err)
            } else {
                res.send(data)
                fs.readFile('../dataExternal.json', (err, JSONdata) => {
                    if (err) throw err;
                stringedData = JSON.stringify(data)
                    console.log(JSONdata)
                    console.log(stringedData)
                    fs.writeFile('../dataExternal.json', stringedData, (err) =>{
                        if (err) throw err;
                    })
                })

            }
        })
    })

    
}