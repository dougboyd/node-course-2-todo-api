// const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log(`Unable to connect to MongoDB Server: `);
        return console.log(err);
    }
    console.log('Connected to Mongo');

    db.collection('Users').find({
            name: 'Chloe Byrne'
        }).toArray().then((docs) => {
            console.log(docs);
        })
        .catch((err) => {
            console.log(err);
        })

    db.close();
});