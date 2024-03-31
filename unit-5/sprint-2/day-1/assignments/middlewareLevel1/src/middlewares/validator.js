const fs = require("fs");
const { type } = require("os");

// make the validator function and export it.

const validatorfunction=((req,res,next)=>{
      const {ID,Name,Rating,Description,Genre,Cast}=req.body;

      //checking for filed exist or not;
      if(!(ID && Name && Rating && Description && Genre && Cast)){
        fs.appendFileSync("res.txt", "bad request.some data is incorrect.\n");
        res.status(400).send("invalid request body.");
        return ;
      }

      //Validate Id;
      if(!isNaN(ID)){
        fs.appendFileSync('res.txt','ID is a number\n');
      }else{
         fs.appendFileSync('res.txt','bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
      }
     //validate string;
     if(typeof Name==='string' && !/\d/.test(Name)){
       fs.appendFileSync('res.txt','Name is a string\n');
     }else{
        fs.appendFileSync('res.txt','bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
     }
      
    if(typeof Description==='string'){
        fs.appendFileSync('res.txt','Description is a string\n');
    }else{
        fs.appendFileSync('res.txt','bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }
    if(!isNaN(Rating)){
        fs.appendFileSync('res.txt',`Rating is a number\n`);
    }else{
        fs.appendFileSync('res.txt','bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }
    if(typeof Genre==='string'){
        fs.appendFileSync('res.txt',`Genre is a string\n`)
    }else{
        fs.appendFileSync('res.txt','bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }
    if(Array.isArray(Cast) && Cast.every((item)=> typeof item==='string')){
        fs.appendFileSync('res.txt',`Cast is a array of string`);
    }else{
        fs.appendFileSync('res.txt','bad request.some data is incorrect.\n');
        return res.status(400).send('bad request.some data is incorrect.');
    }

    next();
});

module.exports=validatorfunction;






















// module.exports = validatorfunction;
