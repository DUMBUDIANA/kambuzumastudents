const { MongoClient } = require('mongodb')
 
 let dbConnection

 module.exports = {
    connectToDb: (cb) => { // we are passing in the callback(cb) function we want to fire after we connect the database
        MongoClient.connect('mongodb://localhost:27017/Kambuzuma_Vans')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection 
 }