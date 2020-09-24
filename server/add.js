module.exports = {
    adddata: function(db, newId, newUnits, result){
        // Parameter will be a single object
        const collection = db.collection('products');
        collection.insertOne({id: newId, units: newUnits})
            // find for testing
            .then(result = collection.find({}).toArray())
            // .then(response => result(response))
            .catch(err => console.log(err))
        }
}