const mongoose = require("mongoose");
require('dotenv').config({path:'./.env'})

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MongoURI);
        console.log("Connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;