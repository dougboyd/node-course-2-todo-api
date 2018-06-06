// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log(`Unable to connect to MongoDB Server: `);
        return console.log(err);
    }
    console.log('Connected to Mongo');


    db.collection('Todos').insertOne({
         text: 'Crossfit',
         completed: false
     }, (err, result) => {
         if(err){
             console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
         }
     });
    db.collection('Todos').insertOne({
         text: 'Get single',
         completed: true
     }, (err, result) => {
         if(err){
             console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
         }
     });
    db.collection('Todos').insertOne({
         text: 'Walk the dog',
         completed: false
     }, (err, result) => {
         if(err){
             console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
         }
     });
    
    db.collection('Users').insertOne({
        name: 'Dimity Douglas',
        location: 'Barton, ACT',
        age: 52
    }, (err, result) => {
        if(err){
            console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
         }
     });
    db.collection('Users').insertOne({
        name: 'Chloe Byrne',
        location: 'Barton, ACT',
        age: 52
    }, (err, result) => {
        if(err){
            console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
         }
     });
    db.collection('Users').insertOne({
        name: 'Ken Boyd',
        location: 'Barton, ACT',
        age: 52
    }, (err, result) => {
        if(err){
            console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
         }
     });
    db.collection('Users').insertOne({
        name: 'Carol Boyd',
        location: 'Barton, ACT',
        age: 52
    }, (err, result) => {
        if(err){
            console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
         }
     });
    db.collection('Users').insertOne({
        name: 'Douglas Boyd',
        location: 'Barton, ACT',
        age: 52
    }, (err, result) => {
        if(err){
            console.log(`ERROR in insertOne - ${err}`);
         } else {
             console.log(JSON.stringify(result.ops, undefined, 2));
             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
         }
     });

    db.close();
});