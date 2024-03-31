const express=require('express')
const {UserModel}=require('../model/user.model');
const userRouter = express.Router();
userRouter.get('/',async(req,res)=>{
    try{
       const users=await UserModel.find(req.query)
        res.status(200).json({user_data:users});
    }catch(err){
     res.status(400).json(err);
    }
 })
 
 //create
 userRouter.post('/add',async(req,res)=>{
     const payload=req.body
     try{
       const user=new UserModel(payload);
        await user.save();
        res.json({msg:"The new user has been registered",new_user:payload})
     }catch(err){
         res.json(err);
     }   
 })
 
 
 //patch
 userRouter.patch("/update/:userID",async(req,res)=>{
     const {userID}=req.params;
     const payload=req.body;
     try{
        await UserModel.findByIdAndUpdate({_id:userID},payload)
        res.status(200).json({msg:"The user with ID:${userID} has been updated"})
     }catch(err){
       res.status(400).json({error:err});
     }
 })
 
 
 
 // delete()
 userRouter.delete("/delete/:userID",async(req,res)=>{
     const {userID}=req.params;
     // const payload=req.body;
     try{
        await UserModel.findByIdAndDelete({_id:userID})
        res.status(200).json({msg:"The user with ID:${userID} has been delete"})
     }catch(err){
       res.status(400).json({error:err});
     }
 })


module.exports={
    userRouter
}
 
 