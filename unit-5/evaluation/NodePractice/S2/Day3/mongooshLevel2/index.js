//basic learning .
//step1==>creating a basic express application.(installing the Resources.)(creating basic Routes).
//step2==>connecting the DB.(connection,optimised way).
//step3==>Structuring the DB.(Working on the Schema,Model).
//step4==>CRUD.(Creating a new Document,Reading all the Document, Updeting , Deleting.)
//MCV.


const express=require('express');
const {connection}=require('./db');
// const {UserModel}=require('./model/user.model');
// const {productModel}=require('./model/product.model');
const {userRouter}=require("./routes/user.routes");
const app=express();
app.use(express.json());
app.use('/users',userRouter)
// app.get('/users',async(req,res)=>{
//    try{
//       const users=await UserModel.find(req.query)
//        res.status(200).json({user_data:users});
//    }catch(err){
//     res.status(400).json(err);
//    }
// })

// //create
// app.post('/addUser',async(req,res)=>{
//     const payload=req.body
//     try{
//       const user=new UserModel(payload);
//        await user.save();
//        res.json({msg:"The new user has been registered",new_user:payload})
//     }catch(err){
//         res.json(err);
//     }   
// })


// //patch
// app.patch("/update/:userID",async(req,res)=>{
//     const {userID}=req.params;
//     const payload=req.body;
//     try{
//        await UserModel.findByIdAndUpdate({_id:userID},payload)
//        res.status(200).json({msg:"The user with ID:${userID} has been updated"})
//     }catch(err){
//       res.status(400).json({error:err});
//     }
// })



// // delete()
// app.delete("/delete/:userID",async(req,res)=>{
//     const {userID}=req.params;
//     // const payload=req.body;
//     try{
//        await UserModel.findByIdAndDelete({_id:userID})
//        res.status(200).json({msg:"The user with ID:${userID} has been delete"})
//     }catch(err){
//       res.status(400).json({error:err});
//     }
// })






app.listen(4500,async()=>{
    try{
      await connection
    console.log("connected to db")
    console.log("Server is running at port 4500");
    }catch(err){
        console.log(err);
    }
   
})


//we are not reading data in patch and delete.