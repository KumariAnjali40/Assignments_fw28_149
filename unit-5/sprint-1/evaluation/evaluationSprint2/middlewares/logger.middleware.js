
const fs =require("fs")

const logger = (req,res,next) => {
  const timestamp=new Date();
  fs.appendFileSync("./logs.txt",`URL: ${req.url}, Method: ${req.method}, Timestamp: ${timestamp}\n`,'utf-8')
  // console.log(`URL: ${url}, Method: ${method}, Timestamp: ${timestamp}`)
  // res.send("hi")
  console.log(req.url);
  next();
};

module.exports = {
  logger,
};

//+0.5
