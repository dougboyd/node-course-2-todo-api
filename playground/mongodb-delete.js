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

     db.collection('Todos').findOneAndDelete({
            // completed: false
              text: 'Eat lunch'
         }).then((result) => {
             console.log(result);
         })
         .catch((err) => {
             console.log(err);
         });

    //  db.collection('Todos').find({
    //           text: 'Eat lunch'
    //      }).toArray().then((docs) => {
    //          console.log(docs);
    //      })
    //      .catch((err) => {
    //          console.log(err);
    //      })

    db.close();
});