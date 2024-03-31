const express=require('express');
const {UserModel}=require('../models/user.model')
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


//authentication

userRouter.post('/login',async(req,res)=>{
    const {email,pass}=req.body;
    try{
          const user=await UserModel.findOne({email});
           if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                const access_token=jwt.sign({course:"nsd104"},"masai",{expiresIn:45});
                const refresh_token=jwt.sign({course:"nem111"},"school",{expiresIn:180});
                if(result){
                    res.status(200).json({msg:"Login successfull",access_token,refresh_token})
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

//logout//blacklist
userRouter.get('/logout',(req,res)=>{
    const token=req.headers.authorization?.split(" ")[1]
    try{
           blacklist.push(token);
           res.status(200).json({msg:"You have been logged out"})
    }
    catch(error){
          res.status(400).json({error:err})
        console.log(error);
    }
})

module.exports={
    userRouter,
}