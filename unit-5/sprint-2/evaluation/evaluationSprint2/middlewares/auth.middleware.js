const auth = (req,res,next) => {
  const {role,pass}=req.query;

  if(role==='admin' && pass=='saveEarth'){
    next();
  }else{
    res.status(401).json({ message: "Not Authorized" });
  }
};

module.exports = {
  auth,
};

//+1
