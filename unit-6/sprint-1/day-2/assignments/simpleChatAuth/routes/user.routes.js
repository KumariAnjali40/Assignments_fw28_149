const express=require('express');
const bcrypt=require('bcrypt');
const {UserModel}=require('../models/user.models');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');

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


userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        bcrypt.compare(pass, user.pass, (err, result) => {
          if (result) {
            const token = jwt.sign({ course: "nsd204" }, "masai");
            res.cookie("token", token, { maxAge: 900000, httpOnly: true });
            console.log(token);
  
            res.status(200).json({
              msg: "login done",
              token: token,
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


module.exports={
    userRouter
}