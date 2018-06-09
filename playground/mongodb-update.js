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


    //   for (i = 0; i < 5; i++) {
    //       db.collection('Todos').insertOne({
    //           text: 'Eat lunch',
    //           completed: false
    //       }, (err, result) => {
    //           if (err) {
    //               console.log(`ERROR in insertOne - ${err}`);
    //           } else {
    //               // console.log(JSON.stringify(result.ops, undefined, 2));
    //           }
    //       })
    //   }

    //    db.collection('Todos').deleteMany({
    //        completed: false
    //    }).then((result) => {
    //        console.log(result)
    //    });

    db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID("5b1b32a5a00cd987d7813d42")
        }, {
            $set: {
                text: 'get very very rich'
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result)
        });

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID("5b15aeeb8114fe7a60a17bce")
        }, {
            $set: {
                name: 'Chloe Douglas'
            },
            $inc: {
                age: -35
            }
        }, {
            returnOriginal: false
        }
    )
.then((result) => {
    console.log(result);
})

db.collection('Users').find({
    name: 'Chloe Douglas'
}).toArray().then((docs) => {
    console.log(docs);
})
.catch((err) => {
    console.log(err);
})

db.close();
});