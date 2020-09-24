// module.exports = {
//     updatedata: function(db, idToUpdate, UpdatedValue, result){
//         const collection = db.collection('products');
//         var queriedrecord = {id :idToUpdate}
//         var updatedValues = { $set: {units: UpdatedValue}}
//         // collection.updateOne()
//         collection.updateOne(queriedrecord, updatedValues)
//             .then(result = collection.findOne(queriedrecord))
//             // .then(response => result(response))
//             .catch(err => console.log(err))
//     }
// }



module.exports = function(db, app, ObjectID){
    app.get('/api/update', function(req, res){

        if (!req.body){
            return res.sendStatus(400)
        }

        product = req.body
        var objectid = new ObjectID(product.objid)

        const collection = db.collection('products');
        collection.updateOne({_id:objectid}, {$set: {id: product.id, name : product.name , price: product.name, description: product.description, quantity: product.quantity}}, (err, data) =>{
            if (err){
                console.log(err)
            } else {
                res.send({'ok' : product.objid});
            }
        })
    })
}