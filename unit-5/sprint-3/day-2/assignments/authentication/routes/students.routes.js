const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
const {StudentModel}=require('../models/students.model');
const studentRouter=express.Router();


studentRouter.post('/register',async(req,res)=>{
    const {name,age,batch,password,email}=req.body;
    try{
        bcrypt.hash(password,3, async(err, hash)=> {
            if(err){
                res.status(400).json({err:err});
            }else{
                const student=new StudentModel({name,age,batch,password:hash,email});
                await student.save()
                res.status(200).json({msg:"new student added",student})
                console.log(student);
            }
        });
        //  console.log(student);
    }
    catch(err){
        res.send(err);
    }
})

//login
studentRouter.post('/login',async(req,res)=>{
    const {password,email}=req.body;
     try{
        const student=await StudentModel.findOne({email});
        if(student){
            bcrypt.compare(password,student.password ,(err, result)=> {
               if(result){
                res.status(200).json({msg:"Login Successfully",token:jwt.sign({course:"nsd104"},"masai")});
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
    studentRouter
 }