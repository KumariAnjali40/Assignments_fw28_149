//  import required modules from nodejs and build the server
const express = require("express");
const fs = require("fs");


// export the server
// module.exports = app;
const app=express();
app.use(express.json()); //middleware.

app.get("/",(req,res)=>{
    const wholedata=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const todos=wholedata.todos;
    res.status(200).send(todos);
});

//post
app.post("/",(req,res)=>{
    // read
    const data=fs.readFileSync("./db.json","utf-8");
    //parse the data.
    const parse_data=JSON.parse(data);
    //push
    parse_data.todos.push(req.body);

    //write complete data back to file.
    fs.writeFileSync("./db.json",JSON.stringify(parse_data));
    res.status(200).json(parse_data.todos);
    console.log("new todo added");

})

//put.
app.put("/:id",(req,res)=>{
    const id=req.params.id*1;
    const data=fs.readFileSync("./db.json","utf-8");
    const parse_data=JSON.parse(data);
     let todo=parse_data.todos;
     let update=false;
     todo.forEach((data,index)=>{
        if(data.id===id){
            todo[index]=req.body;
            update=true;
        }
     });
     if(update){
        //save updated data back to the file
        fs.writeFileSync("./db.json" ,JSON.stringify(parse_data,null,2));
        //return res with status 200 and updated status of the todos.
        res.status(200).send(todo);
     }else{
        res.status(400).send("Invalid argument");
     }  
});

//Delete.
app.delete("/:id",(req,res)=>{
    const id=req.params.id*1;
    const data=fs.readFileSync("./db.json","utf-8");
    const parse_data=JSON.parse(data);
    let todos=parse_data.todos;
    let update=false;

    todos.forEach((todo,index)=>{
        if(todo.id===id){
            todos.splice(index,1);
            update=true;
        }
    });
    if(update){
        fs.writeFileSync("./db.json",JSON.stringify(parse_data,null,2));
        res.status(200).send(parse_data.todos);
    }else{
        res.status(400).send("Invalid argument");
    }
});

app.listen(4000,()=>{
    console.log("Server is running at port 4000");
})
module.exports=app;
