const fs = require("fs");

// complete the following fubctions

function isNumber(num) {
  if(!isNaN(num)){
    fs.writeFileSync('./test.txt','it is a Number.');
  }else{
    fs.writeFileSync('./test.txt','it is Not a Number.')
  }
}

function isStr(str) {
    if(typeof str ==='string' && isNaN(Number(str))){
      fs.writeFileSync('./test.txt',"it is a String.");
    }else{
        fs.writeFileSync('./test.txt',`it is Not a String.`);
    }
}

function isArray(arr) {
    if(Array.isArray(arr)){
        fs.writeFileSync("./test.txt","it is a Array.");
    }else{
        fs.writeFileSync("./test.txt","it is Not a Array.");
    }

}

function isObj(obj) {
    if(typeof obj==='object' && obj!=null && !Array.isArray(obj)){
        fs.writeFileSync('./test.txt',"this is a object.");
    }else{
        fs.writeFileSync('./test.txt',"this is not a object.");
    }

}

function cls() {
  try{
    fs.unlinkSync('./test.txt');
  }catch(err){
    console.log(err);
  }
}

// Export All the functions
module.exports={isNumber,isStr,isArray,isObj,cls};
