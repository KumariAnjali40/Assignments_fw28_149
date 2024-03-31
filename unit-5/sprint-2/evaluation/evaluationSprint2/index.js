const express=require('express');
const bodyParser = require("body-parser");
const fs = require("fs");
const {auth} = require("./middlewares/auth.middleware")
const {addID}= require("./middlewares/addID.middleware")
const {logger} = require("./middlewares/logger.middleware");
const app = express();
const port = 3030;

app.use(bodyParser.json());
// app.use(logger);
// Post data
app.post('/add/hero', addID, (req, res) => {
    try{
        let data = fs.readFileSync('./db.json','utf-8')
        const parseData = JSON.parse(data);
        parseData.heroes.push(req.body);
        fs.writeFileSync("./db.json", JSON.stringify(parseData));
        res.send(parseData.heroes);
    }
    catch(error){
        res.status(500).json({err: "Internal Server Error"})
    }
   
});

// Get
app.get('/heroes',(req,res)=>{
    try{
        let data = fs.readFileSync('./db.json','utf-8')
        const parseData = JSON.parse(data);
        res.send(parseData.heroes);
    }
    catch(error){
        res.status(500).json({err: "Internal Server Error"})
    }
})

// Patch
// app.patch('/update/villain/:hero_id',auth,(req,res)=>{
//     try{
//         const iD = +req.params.hero_id;
//         let data = fs.readFileSync('./db.json','utf-8')
//         const parseData = JSON.parse(data);
//         // const nData = req.body;
//         const hero = parseData.heroes.find((ele)=>
//             ele.id === iD);
//             if(!hero){
//                 return res.json({message:'Hero not found'});
//             }
//             hero.villains.push(nData);
//             fs.writeFileSync('db.json',JSON.stringify(data));
//             res.json(hero);
//     }
//     catch(error){
//         res.status(500).json({err: "Internal Server Error"})
//     }

// })

// // Delete
// app.delete('/delete/hero/:hero_id', auth,(req,res)=>{
//     const iD = parseInt(req.params.hero_id);
//     data.heroes = data.heroes.filter((ele)=>
//         hero.id !== iD);
//         fs.writeFileSync('db.json', JSON.stringify(data));
//         res.json(data.heroes);
// })

app.listen(port,()=>{
    console.log("Port is running");
})




//  do not forgot to export server
module.exports = app;