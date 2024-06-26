const express=require('express');
const {UserModel}=require('../schema/user.model')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')


const userRouter=express.Router();

userRouter.post('/register',(req,res)=>{
    const {name,email,pass}=req.body
    try{
        bcrypt.hash(pass,3,async(err,hash)=>{
            if(err){
                res.status(200).json({err});
            }else{
               const user=new UserModel({name,email,pass:hash})
               await user.save();
               res.status(200).json({msg:"new user has been register",user})
            }
        })
    }
    catch(err){
       res.status(400).json({err});
    }
})


userRouter.post('/login',async(req,res)=>{
    const {email,pass}=req.body;
    try{
          const user=await UserModel.findOne({email});
           if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                const access_token=jwt.sign({userID:user._id,name:user.name},"masai");
                if(result){
                    res.status(200).json({msg:"Login successfull",access_token})
                }else{
                    res.status(200).json({msg:"Please Register,Wrong Credentials"})
                }
            })
           }else{
            res.status(200).json({msg:"Please Register,Wrong Credentials"})
            // res.status(200).json({error:err});
           }
    }
    catch(err){
        res.status(400).send(err);
    }
})



module.exports={
    userRouter,
}