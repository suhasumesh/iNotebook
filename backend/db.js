const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://suhasumesh:123@inotebook.hzc53hm.mongodb.net/note"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;