//  do not forgot to export server
// module.exports = app;
const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const {addID}=require('./middlewares/addID.middleware');
const { addAbortListener } = require('events');
const {auth}=require('./middlewares/auth.middleware');
const { logger } = require('./middlewares/logger.middleware');
// const {logger}=require('./middlewares/logger.middleware');
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(logger);
//post.

app.post('/add/hero',addID,(req,res)=>{
   const totalData=fs.readFileSync('./db.json','utf-8');
   const parseData=JSON.parse(totalData);
   parseData.heroes.push(req.body); 
//    console.log(req.body);
   fs.writeFileSync('./db.json',JSON.stringify(parseData));
   res.send(parseData.heroes);
//    console.log(parseData.heroes);

})

//get
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

// / Patch
app.patch('/update/villain/:hero_id',auth,(req,res)=>{
    
   const id=+req.params.hero_id;
   const totalData=JSON.parse(fs.readFileSync('./db.json','utf-8'));

   let hero=totalData.heroes;
   let index=-1;
   let count=0;
   hero.forEach(data=>{
    if(data.id==id){

        index=count;
    }
    count++;
   })
 if(index==-1){
    res.status(400).send("Invalid argument");
 }else{
    hero[index].villains.push(req.body);
    totalData.heroes=hero;
    // fs.writeFileSync('./db.json',JSON.stringify(totalData),'utf-8');
    res.send(totalData.heroes[index]);
 }

})


// Delete
app.delete('/delete/hero/:hero_id', auth,(req,res)=>{
    let hero_id=+req.params.hero_id;
      let totalData=JSON.parse(fs.readFileSync('./db.json','utf-8'));
      let hero=totalData.heroes;
      let index=-1;
      let count=0;
      hero.forEach(data=>{
        if(data.id==hero_id){
            index=count;
        }
        count++;
      })
      if(index==-1){
        res.send(400).send({ message: "Not Authorized" });
      }else{
        hero=hero.filter(data=>data.id!=hero_id);
        totalData.heroes=hero;
        // fs.writeFileSync('./db.json',JSON.stringify(totalData));
        res.status(200).json(totalData.heroes);
      }
})


app.listen(4500,()=>{
    console.log('Server is runnig at the port 4500');
})


module.exports=app;