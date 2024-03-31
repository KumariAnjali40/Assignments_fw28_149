const jwt=require('jsonwebtoken');
const {blackListTokenModel}=require('../modules/blacklist.models');
const auth=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    console.log(token);
    if (await blackListTokenModel.findOne({token})) {
        return res.json({ msg: "You have been logged out again" });
      }
      jwt.verify(token, "masai", async(err, decoded) => {
        if (decoded) {
            console.log(decoded);
           await next();
        } else {
          res.json({ error: err });
          res.json({msg:"You ar not authorized"});
        }
      });
}


module.exports={
    auth,
}