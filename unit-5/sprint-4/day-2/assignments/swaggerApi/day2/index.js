const express=require('express');
const { connection } = require("./db");
const {userRouter}=require('./routes/user.routes');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const app=express();
app.use(express.json());

app.use('/users',userRouter);


const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"User Management System",
            version:"1.0.0"
        },
        servers:[
            {
                url:"http://localhost:4500"
            }
        ]
    },
    apis:["./routes/*.js"]
}

const openApiSpec=swaggerJsDoc(options);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(openApiSpec));



app.get('/',(req,res)=>{
    res.json({msg:"All the data"});
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