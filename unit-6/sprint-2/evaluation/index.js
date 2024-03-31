const express=require('express');
const {transports,format}=require('winston');
const expressWinston=require('express-winston');
require('winston-mongodb');
const {connection}=require('./db');
const {companyRouter}=require('./routes/company.routes');
const {orderRouter}=require('./routes/order.routes');
const {statsRouter}=require('./routes/stats.routes');
const app=express();
app.use(express.json());




//winston

app.use(expressWinston.logger({
    transports:[
        new transports.MongoDB({
            json:true,
            level:"silly",
            db:"mongodb+srv://anjalipandey:anjalipandey@cluster0.oumymuv.mongodb.net/evalRedis?retryWrites=true&w=majority",
            collection:"winstonError",
            options:{
                useUnifiedTopology:true,
            }
        })

    ],
    format:format.combine(
        format.colorize(),
        format.json(),
        format.timestamp(),
        format.prettyPrint(),
    ),
    msg:"HTTP {{req.method}} {{req.url}}",
    statusLevels:true
}))



app.use('/company',companyRouter);

app.use('/order',orderRouter);
app.use('/stats',statsRouter);




app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to Db");
        console.log("Server is running at the port 4500")
    }catch(error){
        console.log(error)
    }
})