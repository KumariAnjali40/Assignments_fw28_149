const express = require('express');
const {connection}=require('./db');
const {userRouter}=require('./routes/users.routes');
const {auth}=require('./middleware/auth.middleware')
const jwt=require('jsonwebtoken');
const app=express();

app.use(express.json());
app.use("/users",userRouter);


app.get('/movies',auth,(req,res)=>{
    res.json({msg:"All the Movies Data"});
})

//refresh token

app.get("/refresh",(req,res)=>{
    const refresh_token=req.headers.authorization?.split(" ")[1];
    const decoded=jwt.verify(refresh_token,"masai");
    console.log(decoded);
    if(decoded){
        const token=jwt.sign({course:"nsd104"},"masai",{expiresIn:15000});
        console.log(token);
        res.send(token);
    }else{
        res.send("Invalid refresh token");
    }
})

app.listen(4500,async(req,res)=>{
    try{
        await connection
        console.log("Connected to DB");
        console.log("Server is running at port 4500");
    }
    catch(err){
        console.log(err);
    }
   
})