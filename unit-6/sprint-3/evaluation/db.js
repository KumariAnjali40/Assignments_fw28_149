const mongoose=require('mongoose');
require('dotenv').config();

const connection=mongoose.connect(process.env.mongoURL);




// db.js


module.exports={
    connection,
}