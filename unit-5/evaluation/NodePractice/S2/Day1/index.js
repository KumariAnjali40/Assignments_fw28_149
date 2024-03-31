// middleware ===> it is a block of code(function) present between request and response object,which has the capacity of changing the request and response as per the requirement . it is the main ingredient of express power source.

//Types of middleware ===> 

// Inbuilt.
// 1. express.json();  , 2.express.text();  3.express.Router();

//Custom.
// 1.TimeLogget() , 2.Logget()

//Community.
//1. cors() 2.multer() 3.morgan()==>for file uploading 

// const express=require("express");
// const fs=require("fs");
// const timeFind=(req,res,next)=>{
//     fs.appendFileSync("./endPoint.txt", `${req.url} , ${req.method} , ${Date()}\n`);
//     next();
// }

// const app=express();
// app.use((req,res,next)=>{
//     console.log(1);
//     next();
// })

// app.get("/",(req,res)=>{
//     console.log("HOME PAGE");
//     res.send("HOME PAGE");
// })

// app.listen(4500,()=>{
//     console.log("Server is running at port 4500");
// })

// app.use((req,res,next)=>{
//     console.log("middleware 1");
//     next();
//     next()
// });

// app.use((req,res,next)=>{
//     console.log("middleware 2");
//     next();
    
// });
// app.use((req,res,next)=>{
//     console.log("middleware 3");
//     next();
    
// });
// app.get("/",(req,res)=>{
//   console.log("HOME PAGE");
//         res.send("HOME PAGE");
//  })

//second question.
// const middleware1=(req,res,next)=>{
//     console.log('middleware 1');
//     next();
// }
// const middleware2=(req,res,next)=>{
//     console.log('middleware 2');
//     next();
// }

// const middleware3=(req,res,next)=>{
//     console.log('middleware 3');
//     next();
// }

// app.use(middleware1);
// app.get("/",(req,res)=>{
//       console.log("HOME PAGE");
//       res.send("HOME PAGE");
// })

//third question
// const middleware1=(req,res,next)=>{
//         console.log('middleware 1');
//         next();
//     }
//     const middleware2=(req,res,next)=>{
//         console.log('middleware 2');
//         next();
//     }

// const findthereq=(req,res,next)=>{
//     console.log(req.url);
//     // next();
// }
// app.use(middleware1,findthereq);

// app.get("/home", middleware2,(req,res)=>{
//     console.log("I am get req");
//     res.send("hello");
// })

