// index.js

//  import the crypto module
const crypto=require("crypto");


//  get a commands using process.argv
let operation=process.argv[2];
let a= +process.argv[3];
let b= +process.argv[4];
let length = +process.argv[3];

// complete the  function
const add=(a,b)=>{
  return a+b;
};
const sub=(a,b)=>{
  return a-b;
};
const mult=(a,b)=>{
  return a*b;
};
const divide=(a,b)=>{
  return a/b;
};
const sin=(num)=>{
  return Math.sin(num);
};
const cos=(num)=>{
  return Math.cos(num);
};
const tan=(num)=>{
  return Math.tan(num);
};
const random=(length)=>{
  if(!length){
    console.log("Provide length for random number generation.");
  }else{
    const bytes=crypto.randomBytes(Math.ceil(length/2));
    console.log(bytes.toString("hex").slice(0,length));
  }
};

switch (operation) {
  case "add":
    console.log(add(a, b));
    break;
  case "sub":
    console.log(sub(a, b));
    break;
  case "mult":
    console.log(mult(a, b));
    break;
  case "divide":
    console.log(divide(a, b));
    break;
  case "sin":
    console.log(sin(a));
    break;
  case "cos":
    console.log(cos(a));
    break;
  case "tan":
    console.log(tan(a));
    break;
  case "random":
    random(length);
    break;
  default:
    console.log("Invalid operation");
}