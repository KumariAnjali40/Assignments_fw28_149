const express=require('express');
const { OrderModel } = require('../models/order.model');


const Redis = require('ioredis');

const redis = new Redis({
    port : "13881",
    host : "redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    password : "iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu"
});


const statsRouter=express.Router();


statsRouter.get('/company/:symbol/day-stat',async(req,res)=>{
   try{

           const {symbol}=req.params;
           const cacheKey=`stats:${symbol}:day`;

           //checking cache

           const cachedStat=await redis.get(cacheKey);
           if(cachedStat){
            return res.json(JSON.parse(cachedStat));
           }

           //calculating the mongodb aggreagation.

           const today=new Date();
           today.setHours(0,0,0,0);

           const stats=await OrderModel.aggregate([
            {$match:{symbol:symbol,time:{$gt:today}}},
            {$group:{
                _id:null,
                maxPrice:{$max:'$price'},
                minPrice:{$min:'$price'},
                orderCount:{$sum:1},
            },
        },
     ])

     const [result]=stats;
     const response={
        maxPrice:result?result.maxPrice:null, 
        minPrice:result?result.minPrice:null,

        orderCount:result?result.orderCount:0,
     };

     //cache the result for 1 day

     redis.set(cacheKey,JSON.stringify(response),'EX',86400);
     res.json(response);
   }
   catch(error){
    console.log(error)
    res.status(500).json({error:error.message});
}
})


//state api monthly

statsRouter.get('/company/:symbol/month-stat',async(req,res)=>{
    const {symbol}=req.params;
    const cacheKey=`state:${symbol}:month`;

    //checking the cache.
    const cachedStat=await redis.get(cacheKey);
    if(cachedStat){
        return res.json(JSON.parse(cachedStat));
    }

    // calculating stat using mongodb aggregation
    const nowTime =new Date();
    const firstDayOfMonth=new Date(nowTime.getFullYear(),nowTime.getMonth(),1);

    const  stats=await OrderModel.aggregate([
        {$match:{symbol:symbol,time:{$gt:firstDayOfMonth}}},
        {$group:{
            _id:null,
            maxPrice:{$max:'$price'},
            minPrice:{$min:'$price'},
            orderCount:{$sum:1}
        },
    },
    ]);
    const [result]=stats;
    const response={
        maxPrice:result?result.maxPrice:null,
        minPrice:result?result.minPrice:null,

        orderCount:result?result.orderCount:0,
    };

    //cache the result 
    redis.set(cacheKey,JSON.stringify(response),'EX',86400);

    res.json(response);
});




module.exports={
    statsRouter,
}