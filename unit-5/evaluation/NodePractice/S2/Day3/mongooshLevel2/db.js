const mongoose=require('mongoose');

require('dotenv').config()
const connection=mongoose.connect(process.env.mongodbUrl);

// mongodb+srv://pulkit:tyagi@cluster0.ctyyld0.mongodb.net/mongoose2crud?retryWrites=true&w=majority

//now for performing crud operation we need schema and models.

//let's create schema. //userSchema and model.
// const userSchema=mongoose.Schema({
//     name:{type:String, required:true},
//     age:{type:Number, required:true},
//     city:{type:String, required:true}
// },{
//    versionKey:false
// })

// const UserModel=mongoose.model('user',userSchema)


// //let's create schema. //productSchema and model.
// const productSchema=mongoose.Schema({
//     name:{type:String, required:true},
//     qty:{type:Number, required:true},
    
// },{
//    versionKey:false
// })

// const ProudctModel=mongoose.model('product',productSchema)








module.exports={
    connection
    // UserModel,
    // ProudctModel

}