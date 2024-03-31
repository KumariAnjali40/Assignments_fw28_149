// const mongoose = require("mongoose");
// // const connection = mongoose.connect(" mongodb://127.0.0.1:27017/");


// const main=async()=>{
//     try{
//         const connection=await mongoose.connect("mongodb://127.0.0.1:27017/sampleData")
//         console.log("connected");
//         await UserModel.insertMany([{name:"Masai",age:4,city:"Banglore",phoneNumber:123456789}])
//         console.log("inserted");
//     }catch(err){
//         console.log(err);
//     }
// }
// main();

// //build the schema.
// const userSchema=mongoose.Schema({
//     name:String,
//     age:Number,
//     city:String,
//     phoneNumber:Number
// })

// //Defining the Model

// const UserModel=mongoose.model("user",userSchema);