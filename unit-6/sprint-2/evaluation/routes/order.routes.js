const express=require('express');
const {OrderModel}=require('../models/order.model');
const Redis = require('ioredis');


const redis = new Redis({
    port : "13881",
    host : "redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    password : "iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu"
});
const orderRouter=express.Router();


//create order
orderRouter.post('/create',async(req,res)=>{
    try{
        const {symbol, price}=req.body;
             const order=new OrderModel({symbol,price,time:new Date()});
             await order.save();

            //invalidate cache
            redis.del(`stats:${symbol}`);


             res.status(201).json(order);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
})


//read order 
orderRouter.get('/:symbol',async(req,res)=>{
    try{
        let symbol=req.params.symbol;
        const order= await OrderModel.findOne({symbol});
        if(!order){
            return res.status(404).json({error:"order not found"});
        }
        res.json(order);
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});
    }
})


//update order
orderRouter.put('/update/:symbol',async(req,res)=>{
    try{
    let symbol=req.params.symbol;
    const order=await OrderModel.findOneAndUpdate({symbol},req.body,{new:true});
    if(!order){
        return res.status(404).json({error:"company not found"});
    }
    res.json(order);
}catch(error){
    console.log(error)
    res.status(500).json({error:error.message});
}
})


//delete
orderRouter.delete('/delete/:symbol',async(req,res)=>{
    try{
        let symbol=req.params.symbol;
        await OrderModel.findOneAndDelete({symbol});

        //invalidate cache
        redis.del(req.body.symbol);


        res.json({msg:"company delted"});
    }
    catch(error){
        console.log(error)
    res.status(500).json({error:error.message});
    }
})






module.exports={
    orderRouter,
}