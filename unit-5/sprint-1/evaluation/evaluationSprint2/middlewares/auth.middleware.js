const fs=require('fs');

const auth = (req,res,next) => {
  const {role,pass}=req.query;
  console.log(req.query);

  if(role==='admin' && pass==='saveEarth'){
    // console.log(req.query);
    next();
  }else{
    res.send({ message: "Not Authorized" });
  }
};

module.exports = {
  auth,
};

//+1
