const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


switch (operation) {
  // complete the fillowing function.
  case "read":
    read(file);
    break;

  case "append":
    append(file,content);
    break;
  
  case "delete":
    remove(file);
    break;

  case "create":
    create(file);
    break;

  case "rename":
    const newFileName=process.argv[4];
    rename(file,newFileName);
    break;

  case "list":
    list(file);
    break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}


//functions for operation

//Aa jao read operation karte hai.

function read(filePath="./test.txt"){
  try{
    const fileRead=fs.readFileSync(filePath,"utf-8");  //fileSync because i want read in synchornous 
    console.log(fileRead);
  }catch(err){
    console.log(err);
  }
}

//wooho read operation done.


//now let's do append the file operation

function append(filePath="./test.txt",content){
  try{
    fs.appendFileSync(filePath,`\n${content}`);
    console.log(filePath);
  }
  catch(err){
    console.log(err);
  }
}

//wohho test case pass for append.

//let's move to delete a file.
function remove(filePath){
  try{
    fs.unlinkSync(filePath);
    console.log(filePath);
  }
  catch(err){
    console.log(err);
  }
}


//let's create file.
function create(filePath){
  try{
    fs.writeFileSync(filePath,"");
    console.log(filePath);
  }
  catch(err){
    console.log(err);
  }
}

//let's rename file.
function rename(filePath,newFileName){
  try{
    const directory=path.dirname(filePath);
    const newFilePath=path.join(directory,newFileName);
    fs.renameSync(filePath,newFilePath);
    console.log(newFileName);

  }
  catch(err){
    console.log(err);
  }
}

//list of all file in directory.

function list(directory){
  try{
    const files=fs.readdirSync(directory);
    files.forEach(file=>{
      console.log(file);
    })
  }
  catch(err){
    console.log(err);
  }
}