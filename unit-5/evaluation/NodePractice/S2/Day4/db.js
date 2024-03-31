const mongoose=require('mongoose');


const connection=await mongoose.connect('mongodb://127.0.0.1:27017/mongoose2crud')


const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number,required:true},
    age:{type:String,required:true}

},{
    versionKey:false
})

const UserModel=mongoose.model('user',userSchema);

module.exports={
    connection,
    UserModel
};