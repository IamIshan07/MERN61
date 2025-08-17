
const mongoose = require('mongoose');

const Dbconn = async()=>{
    try {
        await mongoose.connect("mongodb+srv://ishan07:ishan123@cluster0.h0naw78.mongodb.net/Shadow?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to database successfully");
    } catch (error) {
         console.log("Database connection failed");
         
    }
}

module.exports = Dbconn;