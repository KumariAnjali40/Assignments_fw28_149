
const http = require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer((req,res)=>{
   //check for the root directory (./)
    let filepath='.'+ req.url;
    // console.log(filepath);
    if(filepath=='./'){
       let data= fs.readdirSync(filepath,"utf-8");
       console.log(data);
       data.forEach((el,i)=>{
        // display the children
        res.write(`<a href=${el}>${el}</a>`)
       })
        res.end("") ;
    }else{
        let clickedPath=path.join(__dirname,req.url);
        console.log(clickedPath);
        let ans= fs.existsSync(clickedPath);

        if(ans){
            //it means the path is existing 
            //./index.js==>file
            //./node_modules==>folder/directory.
            //if clicked element is file ==> read the file.
            //if the clicked element is folder ==> we have to read the directory.

            let ans2=fs.statSync(clickedPath).isDirectory();
            if(ans2){
                //means clicked element is folder we have to read the directory.
                let data=fs.readdirSync(clickedPath,"utf-8");
                // console.log(data);
                 //if it is the directory means inside that many folder exist we have to go inside the folder.

                 data.forEach((el,i)=>{
                    res.write(`<a href=${el}>${el}</a>`)
                 })
                 res.end("");
            }else{
                //clicked element is file==>read the file.
                let data=fs.readFileSync(clickedPath,"utf-8");
                res.end(data);
            }
        }else{
                  res.writeHead(404, { 'Content-Type': 'text/plain' });
                  res.end('404 Not Found');
                  return;
                
        }
        
    }

})



server.listen(4500,()=>{
    console.log("Server is runnig at port 4500");
})
module.exports=server;