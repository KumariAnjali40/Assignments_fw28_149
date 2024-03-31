const express=require('express');
const {CompanyModel}=require('../models/company.model');
const Redis = require('ioredis');


const redis = new Redis({
    port : "13881",
    host : "redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    password : "iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu"
});

const companyRouter=express.Router();



//create company
companyRouter.post('/create',async(req,res)=>{
    try{
        const {name, symbol}=req.body;
             const company=new CompanyModel({name,symbol});
             await company.save();
             res.status(201).json(company);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
})


//reading company

companyRouter.get('/:symbol',async(req,res)=>{
    try{
        let symbol=req.params.symbol;
        const company= await CompanyModel.findOne({symbol});
        if(!company){
            return res.status(404).json({error:"company not found"});
        }
        res.json(company);
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:error.message});
    }
})


//update

companyRouter.put('/update/:symbol',async(req,res)=>{
    try{
    let symbol=req.params.symbol;
    const company=await CompanyModel.findOneAndUpdate({symbol},req.body,{new:true});
    if(!company){
        return res.status(404).json({error:"company not found"});
    }
    res.json(company);
}catch(error){
    console.log(error)
    res.status(500).json({error:error.message});
}
})


//delete
companyRouter.delete('/delete/:symbol',async(req,res)=>{
    try{
        let symbol=req.params.symbol;
        await CompanyModel.findOneAndDelete({symbol});
        res.json({msg:"company delted"});
    }
    catch(error){
        console.log(error)
    res.status(500).json({error:error.message});
    }
})




module.exports={
    companyRouter,
}