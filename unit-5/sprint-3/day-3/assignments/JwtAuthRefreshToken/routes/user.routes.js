const express=require('express');
const bcrypt=require('bcrypt');
const {UserModel}=require('../models/user.model');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
// const exp = require('constants');

const userRouter=express.Router();

userRouter.post('/register',(req,res)=>{
    const {name,email,pass}=req.body;
    try{
        bcrypt.hash(pass,3,async(err,hash)=>{
          if(err){
            res.status(200).json({err});
          }else{
            const user=new UserModel({name,email,pass:hash});
            await user.save();
            res.status(200).json({msg:"new user has been register",user})
          }
        })
    }
    catch(err){
        res.status(400).json({err});
    }
})

//login
// userRouter.post('/login',async(req,res)=>{
//     const {email,pass}=req.body;
//     try{
//           const user=await UserModel.findOne({email});
//            if(user){
//             bcrypt.compare(pass,user.pass,(err,result)=>{
//                 console.log(pass);
//                 const access_token=jwt.sign({course:"nsd104"},"masai",{expiresIn:30});
    
//                 //cookie me save karo.
//                 const refresh_token=jwt.sign({course:"nem111"},"masai",{expiresIn:40});
//                 if(result){
//                     res.status(200).json({msg:"Login successfull",access_token,refresh_token})
//                 }else{
//                     res.status(200).json({msg:"Please Register,Wrong Credentials"})
//                 }
//             })
//            }else{
//             res.status(200).json({msg:"Please Register,Wrong Credentials"})
//             // res.status(200).json({error:err});
//            }
//     }
//     catch(err){
//         res.status(400).send(err);
//     }
// })

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        bcrypt.compare(pass, user.pass, (err, result) => {
          if (result) {
            const token = jwt.sign({ course: "nsd104" }, "masai",{expiresIn:20});
            const refresh_token=jwt.sign({course:"nem111"},"masai",{expiresIn:150});
            res.cookie("token", token, { maxAge: 900000, httpOnly: true });
            res.cookie('refresh_token',refresh_token,{ maxAge: 900000, httpOnly: true });
            console.log(refresh_token);
            console.log(token);
  
            res.status(200).json({
              msg: "login done",
              token: token,
              refresh_token:refresh_token
            });
          } else {
            res.status(200).json({ msg: "wrong password" });
          }
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  });





//logout
userRouter.get("/logout", async (req, res) => {
    try {
      res.clearCookie("token");
      res.status(200).json({ msg: "LOGGED OUT" });
    } catch (err) {
      res.status(400).json({ error: "err" });
      console.log(err);
    }
  });


module.exports={
    userRouter,
}