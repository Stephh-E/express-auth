const mongoose = require("mongoose");

async function dbConnect(){
    let databaseURL = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm}
}