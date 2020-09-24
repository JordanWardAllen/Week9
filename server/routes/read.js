// module.exports = {
//     finddata: function(db, result){
//         const collection = db.collection('products');
//         collection.find({}).toArray()
//             .then(response => result(response))
//             .catch(err => console.log(err))
//     }
// }


module.exports = function(db, app){
    app.get('/api/read', function(req, res){
        console.log('read fired')
        const collection = db.collection('products');
        collection.find({}).toArray((err, data) =>{
            if (err){
                console.log(err)
            } else {
                res.send(data)
                console.log(data)
            }
        })
    })
}