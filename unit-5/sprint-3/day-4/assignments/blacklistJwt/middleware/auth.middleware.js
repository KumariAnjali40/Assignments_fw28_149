const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');


const auth=(req,res,next)=>{
    const access_token=req.cookies.access_token;
    console.log(access_token);
    if(!access_token){
        res.json({msg:"you have been logged out"});
    }
    jwt.verify(access_token,"masai",(err,decoded)=>{
        if(decoded){
            next();
        }else{
            res.json({error:err});
        }
    })
}

module.exports={
    auth,
}