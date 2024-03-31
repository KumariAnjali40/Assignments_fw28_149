//  import required modules from nodejs and build the server

const express=require('express');
const fs=require('fs');
// export the server


const app=express();
app.use(express.json());

//get the data.
app.get('/',(req,res)=>{
    const totalData=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const todos=totalData.todos;

    res.status(200).send(todos);
    console.log("get the data");
})

///post.
//read the data .
//get the array
//push the req.body.
//get the totol data.
//write 


app.post('/',(req,res)=>{
    const totalData=JSON.parse(fs.readFileSync('./db.json',"utf-8"));
    const todos=totalData.todos;
    todos.push(req.body);
    totalData.todos=todos;
    fs.writeFileSync('./db.json',JSON.stringify(totalData),"utf-8");
    res.status(200).json(totalData.todos);
})

//put

app.put('/:id',(req,res)=>{
    const id=+req.params.id;
    const totalData=JSON.parse(fs.readFileSync('./db.json',"utf-8"));
    const todos=totalData.todos;

    let index=-1;
    let count=0;
    todos.forEach(data=>{
        if(data.id===id){
            index=count;
        }
        count++;
    })
    if(index==-1){
        res.status(400).send("Invalid argument");
    }else{
        todos[index]=req.body;
        totalData.todos=todos;
       
        fs.writeFileSync('./db.json',JSON.stringify(totalData),"utf-8");
        res.status(200).send(totalData.todos);

    }
})
//Delete 
 app.delete('/:id',(req,res)=>{
    let id=+req.params.id;
    const totalData=JSON.parse(fs.readFileSync('./db.json','utf-8'));
    let todo=totalData.todos;
    let index=-1;
    let count=0;
    todo.forEach(data=>{
        if(data.id==id){
            index=count;
        }
        count++;
    })
    if(index==-1){
        res.status(400).send("Invalid argument");
    }else{
        todo=todo.filter(data=> data.id!=id)
        totalData.todos=todo;
        fs.writeFileSync('./db.json',JSON.stringify(totalData));
        res.status(200).json(totalData.todos);
    }
 })


// eg.module.exports = app;



app.listen(4500,()=>{
    console.log("port is runnig on 4500");
})

module.exports=app;