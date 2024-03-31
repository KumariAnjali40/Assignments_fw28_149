const express=require('express');
const {UserModel}=require('../modules/users.models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { blackListTokenModel } = require('../modules/blacklist.models');


const userRouter=express.Router();

//register
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



// login
userRouter.post('/login',async(req,res)=>{
        const {email,pass}=req.body;
        try{
              const user=await UserModel.findOne({email});
               if(user){
                bcrypt.compare(pass,user.pass,(err,result)=>{
                    console.log(pass);
                    const access_token=jwt.sign({course:"nsd104"},"masai",{expiresIn:80});
        
                    const refresh_token=jwt.sign({course:"nem111"},"masai",{expiresIn:150});
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


//userlogoutu

userRouter.get('/logout',async(req,res)=>{
    const token=req.headers.authorization?.split(" ")[1];
    try{
        const blacklist=new blackListTokenModel({token});
        await blacklist.save();
        res.status(200).json({msg:"you have been logged out"});
    }catch(err){
        res.status(400).json({error:"err"});
        console.log(err);
    }
})






module.exports={
    userRouter,
}