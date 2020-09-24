module.exports = {
    finddata: function(db, result){
        const collection = db.collection('products');
        collection.find({}).toArray()
            .then(response => result(response))
            .catch(err => console.log(err))
    }
}