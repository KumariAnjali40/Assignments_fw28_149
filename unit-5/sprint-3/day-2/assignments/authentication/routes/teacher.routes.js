const express=require('express');
const bcrypt=require('bcrypt');
const {TeacherModel}=require('../models/teachers.model');


const teacherRouter=express.Router()


teacherRouter.post('/registerTeacher',async(req,res)=>{
    const {name,email,password,subject,experience}=req.body;
   try{
    bcrypt.hash(password,5,async(err, hash)=> {
        if(err){
            res.status(400).json({err:err});
        }else{
            const teacher= new TeacherModel({name,email,password:hash,subject,experience});
            await teacher.save();
            res.status(200).json({msg:"new teacher added",teacher})
        }
    });
   }catch(err){
    res.status(400).json({err});
   }
})

//login 

teacherRouter.post('/loginTeacher',async(req,res)=>{
    const {password,email}=req.body;
     try{
        const teacher=await TeacherModel.findOne({email});
        if(teacher){
            bcrypt.compare(password,teacher.password ,(err, result)=> {
               if(result){
                res.status(200).json({msg:"Login Successfully"});
               }else{
                res.json({msg:"Wrong person"});
               }
            });
        }else{
            res.status(200).json({msg:"please register first"});
        }
     }
     catch(err){
        res.json(err);
     }
})



module.exports={
    teacherRouter
}