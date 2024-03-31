const mongoose=require('mongoose');

const teacherSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String , require:true},
    password:{type:String,require:true},
    subject:{type:[String],require:true},
    experience:{type:Number,require:true}

},{
    versionKey:false
})


const TeacherModel=mongoose.model('teacher',teacherSchema);

module.exports={
    TeacherModel
}