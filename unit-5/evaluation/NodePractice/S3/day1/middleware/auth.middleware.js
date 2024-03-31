const jwt=require('jsonwebtoken');
const { blacklist } = require('../blacklist');

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(token){
   //for blacklist
     if(blacklist.includes(token)){
        res.json({msg:"You have been logged out"})
     }
     //balacklist
     
        jwt.verify(token,"masai",(err,decoded)=>{

            if(decoded){
                // res.json({msg:"All the movies data"})
                next();
            }else{
                res.json({msg:"Not authorized"});
            }
        })
    }else{
        res.json({msg:"No entry! Pehle Token"});
    }
}


module.exports={
    auth
}