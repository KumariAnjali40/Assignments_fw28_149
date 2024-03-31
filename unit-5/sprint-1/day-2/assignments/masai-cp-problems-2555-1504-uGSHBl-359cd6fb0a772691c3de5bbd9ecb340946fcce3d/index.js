// index.js

//  import the crypto module



//  get a commands using process.argv


// complete the  function
const crypto=require('crypto');


// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }


//add twp number
function add(a,b){
  return a+b;
}
//sub
function sub(a,b){
  return a-b;
}

//multiply
function mul(a,b){
  return a*b;
}

//divide
function div(a,b){
  if(b===0){
    return "cannot divide by zero";
  }else{
    return a/b;
  }
}
//sin






function sin(num){
  return Math.sin(num);
}






//jelloooosoooso
//cos
function cos(num){
  return Math.cos(num);
}

//tan
function tan(num){
  return Math.tan(num);
}

// random number;
function reandomNum(length){
  if(!length){
    return "Provide length for random number generation.";
  }
  const bytes=crypto.randomBytes(Math.ceil(length/2));
  return bytes.toString('hex').slice(0,length);
}


function calculation(){
  const args=process.argv.slice(2);
  const operation=args[0];

  if(operation==='add'){
   console.log(add(+(args[1]),+(args[2])));
  }else if(operation==='sub'){
    console.log(sub(+(args[1]),+(args[2])));
  }else if(operation==='mult'){
    console.log(mul(+(args[1]),+(args[2])));
  }else if(operation==='divide'){
    console.log(div(+(args[1]),+(args[2])));
  }else if(operation==='sin'){
    console.log(sin(+(args[1])));
  }else if(operation==='cos'){
    console.log(cos(+(args[1])));
  }else if(operation==='tan'){
    console.log(tan(+(args[1])));
  }else if(operation==='random'){
    console.log(reandomNum(+(args[1])));
  }else{
    console.log("Provide length for random number generation.");
  }
}
calculation();