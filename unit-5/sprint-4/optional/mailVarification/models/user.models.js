const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
      type:String,
      required:true

      },
      is_varified:{
      type:Number,
      default:0

      },
      mobile:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     image:{
        type:String,
        required:true
     },
    },{
        versionKey:false

})


const UserModel=mongoose.model('user',userSchema);


module.exports={
    UserModel,
}