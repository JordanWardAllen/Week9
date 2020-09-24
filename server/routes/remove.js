// module.exports = {
//     removedata: function(db, idToDelete, result ){
//         const collection = db.collection('products');
//         collection.deleteOne({id: idToDelete})
//             .then(result = collection.find({}))
//             .catch(err => console.log(err))
//     }
// }

module.exports = function(db, app, ObjectID){
    app.post('/api/remove', function(req, res){

        console.log('remove fired')
        if (!req.body){
            return res.sendStatus(400)
        }

        IdToDelete = req.body.id
        // var objectid = new ObjectID(IdToDelete)
        const collection = db.collection('products');
        collection.deleteOne({id: IdToDelete}, (err, doc) =>{
            if (err){
                console.log("Error" + err)
            } else {
                collection.find({}).toArray((err, data) => {
                    console.log(data)
                    res.send(data)
                })
            }
        })
    })
}
