// HTTP
const http = require("http");
const fs=require("fs");
const { constants } = require("buffer");
const server = http.createServer((req,res)=>{
    //logic
      if(req.url==="/"){
        // res.setHeader("Content-type", "text/html");
        res.end("Home page");
      }else if(req.url==='/about'){
        res.end("This is about page");
      }else if(req.url==='/contacts'){
        res.end("This is contact page");
      }else if(req.url==='/users'){
        fs.readFile("./db.json","utf-8",(err,data)=>{
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        })
      }else if(req.url==="/adduser" && req.method==="POST"){
       // console.log(res.body); // res.body does not exist in http modules whenever we want to check this kind of request we need to use events.
         
       let str="";
       req.on("data",(part)=>{
          str+=part;
       })
       req.on("end",()=>{
        console.log(str);
       })
        res.end("The user is added to the DB");
      }else if(req.url==='/movies'){
           const movieStreams=fs.createReadStream("./movie.txt","utf-8");
           movieStreams.pipe(res);
      }
      else{
        res.end("404 error")
      }
})

//for running the server
server.listen(8080 , ()=>{
    console.log("Server is running at port 8080");
})