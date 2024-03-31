const express=require("express");

const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("HOme Page");
});

app.get("/cities",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(data.cities);
    
})



app.listen(4500,()=>{
       console.log("Server is running at 4500 port")
});