const mongoose = require("mongoose");



async function connectToDB(){

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connectToDB Successfully");
    }
    catch(err){
        console.log("Database error: ", err);
    }
    
}




module.exports = connectToDB;