//  import required modules from nodejs and build the server
let express=require('express');
const bodyParser = require('body-parser');
const fs=require('fs');
const validatorfunction=require('./middlewares/validator')

let app=express();

app.use(bodyParser.json());

app.use(validatorfunction);

app.post('/',(req,res)=>{
    res.status(200).send('data received');
});

app.listen(4500,()=>{
    console.log('Server is running at port 4500');
})






















module.exports=app;
