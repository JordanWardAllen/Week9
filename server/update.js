module.exports = {
    updatedata: function(db, idToUpdate, UpdatedValue, result){
        const collection = db.collection('products');
        var queriedrecord = {id :idToUpdate}
        var updatedValues = { $set: {units: UpdatedValue}}
        // collection.updateOne()
        collection.updateOne(queriedrecord, updatedValues)
            .then(result = collection.findOne(queriedrecord))
            // .then(response => result(response))
            .catch(err => console.log(err))
    }
}