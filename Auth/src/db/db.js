require('dotenv').config();
const mongoose = require('mongoose');

function connectDb (){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> {
        console.log("Connected to db")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = connectDb;