const express=require('express');
const { connection } = require("./db");
const {userRouter}=require('./routes/user.routes');
const {auth}=require('./middleware/auth.middleware');
const jwt=require('jsonwebtoken');
const app=express();
app.use(express.json());

app.use('/users',userRouter);

//only after authentication(login)
app.get('/movies',auth,(req,res)=>{
    res.json({msg:"All the movies data"});
    
})

app.get('/series',auth,(req,res)=>{
    res.json({msg:"All the series data"});
    
})

//regenrate token
app.get('/regenerate',(req,res)=>{
   const refresh_token=req.headers.authorization?.split(" ")[1];
   const decoded=jwt.verify(refresh_token,"school")
    if(decoded){
        const access_token=jwt.sign({course:"nsd104"},"masai",{expiresIn:45})
        res.send(access_token)
    }else{
        res.send("Invalid referesh token")
    }
})

app.listen(4500,async()=>{
    try{
       await connection
       console.log("connected to db");
       console.log("Server is running at port 4500");
    }catch(err){
        console.log(err);
    }
    
})