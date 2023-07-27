const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1:27017/247'
mongoose.connect(URL);

const db = mongoose.connection;

db.on('error',function(){
    console.log("error connecting to mongo db")
})

db.once('open', function(){
    console.log('Successfully connected to MOngo Db')
})

module.exports = db;