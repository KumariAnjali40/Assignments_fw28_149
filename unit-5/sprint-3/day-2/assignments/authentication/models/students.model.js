const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String,required:true},
    batch:{type:String,required:true},
    age:{type:Number,required:true}

},{
    versionKey:false
})


const StudentModel=mongoose.model('student',studentSchema);

module.exports={
    StudentModel
}