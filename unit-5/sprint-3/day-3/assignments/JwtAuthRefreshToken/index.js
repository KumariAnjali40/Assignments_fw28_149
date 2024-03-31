const express=require('express');
const {connection}=require('./db');
const {userRouter}=require('./routes/user.routes');
const {auth}=require('./middleware/auth.middleware');
const cookieParser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const app=express();

app.use(express.json());
app.use(cookieParser());

app.use('/users',userRouter);


//restricted routes

app.get('/movies',auth,(req,res)=>{
    res.json({msg:"All the Movies Data"});
})

//refresh token

app.get("/refresh", (req, res) => {
    const refresh_token = req.cookies.refresh_token;
    console.log(refresh_token);
    const decoded = jwt.verify(refresh_token, "masai");
    if (decoded) {
      const token = jwt.sign({ course: "nsd104" }, "masai", {
        expiresIn: 45,
      });
      res.cookie("token", token, { maxAge: 900000, httpOnly: true });
      res.send(token);
    } else res.send("invalid Refresh token");
  });


app.listen(4500,async()=>{
   try{
    await connection
    console.log("Connected to db");
    console.log("Server is running at 4500");
   }
   catch(err){
    console.log(err);
   }

})