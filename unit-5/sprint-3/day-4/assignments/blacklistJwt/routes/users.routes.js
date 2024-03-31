const express=require('express');
const {UserModel}=require('../models/users.models');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');


const userRouter=express.Router();

userRouter.post('/register',(req,res)=>{
    const {name,email,pass}=req.body;
    try{
        bcrypt.hash(pass,3,async(err, hash)=> {
            if(err){
                res.status(200).json({err});
            }else{
                const user=new UserModel({name,email,pass:hash});
                await user.save();
                res.status(200).json({msg:"New user has been Register"});
            }
        });
    }
    catch(err){
        res.status(400).json({msg:err});
    }
})

//login
userRouter.post('/login',async(req,res)=>{
    const {email,pass}=req.body
    try{
        const user=await UserModel.findOne({email});
        if(user){
            bcrypt.compare(pass,user.pass,(err, result)=> {
                if(result){
                    const access_token = jwt.sign({ course: 'nad104' }, 'masai',{expiresIn:20});
                    const refresh_token = jwt.sign({ course: 'nem111' }, 'masai',{expiresIn:40});
                    res.cookie("access_token",access_token,{maxAge:900000,httpOnly:true});
                    res.cookie('refresh_token',refresh_token,{maxAge:900000,httpOnly:true});
                    console.log(access_token);
                    console.log(refresh_token);
                    res.status(200).json({msg:"Hey! user Welcome,Login Done"});
                }else{
                    res.status(200).json({msg:"Wrong credential"});
                }
            });
        }else{
            res.status(200).json({msg:"Moye Moye! Please Register First"});
        }
    }
    catch(err){
        console.log(err);
      res.status(400).json({ error: err });
    }
})

//clear cookies
userRouter.get('/logout',(req,res)=>{
    try{
       res.clearCookie('access_token');
       res.clearCookie('refresh_token');
       res.status(200).json({msg:"Hey! user, You ar logged out"});
    }
    catch(err){
        console.log(err);
        res.status(400).json({msg:err});
    }
})


module.exports={
    userRouter,
}