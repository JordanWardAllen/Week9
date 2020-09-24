module.exports = {
    removedata: function(db, idToDelete, result ){
        const collection = db.collection('products');
        collection.deleteOne({id: idToDelete})
            .then(result = collection.find({}))
            .catch(err => console.log(err))
    }
}