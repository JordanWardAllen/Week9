// module.exports = {
//     adddata: function(db, newId, newUnits, result){
//         // Parameter will be a single object
//         const collection = db.collection('products');
//         collection.insertOne({id: newId, units: newUnits})
//             // find for testing
//             .then(result = collection.find({}).toArray())
//             // .then(response => result(response))
//             .catch(err => console.log(err))
//         }
// }

module.exports = function(db, app, ObjectID){
    app.post('/api/add', function(req, res){
        console.log('add api fired')
        if (!req.body){
            return res.sendStatus(400)
        }
        product = req.body

        const collection = db.collection('products');
        collection.insertOne({id: product.id, name : product.name , price: product.name, description: product.description, quantity: product.quantity}, (err, data) =>{
            if (err){
                console.log(err)
            } else {
                res.send({'ok' : product});
            }
        })
    })
}