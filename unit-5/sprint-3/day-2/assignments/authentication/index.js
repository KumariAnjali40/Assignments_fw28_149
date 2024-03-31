const express=require('express');
const { connection } = require('./db');
const {teacherRouter}=require('./routes/teacher.routes');
const { studentRouter } = require('./routes/students.routes');
const jwt=require('jsonwebtoken');

const app=express();
app.use(express.json());
app.use('/teacher',teacherRouter);
app.use('/student',studentRouter);

app.get('/',(req,res)=>{
    res.send("hello docker");
})


app.get('/courses',(req,res)=>{
    const {token}=req.query
    jwt.varify(token,"masai",)
})


app.listen(4500,async()=>{
    try{
        await connection;
        console.log("connected to db");
        console.log("Server is running at port 4500")
    }
    catch(err){
    console.log(err);
    }
})