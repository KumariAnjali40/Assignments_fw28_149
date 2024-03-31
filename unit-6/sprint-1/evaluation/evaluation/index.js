const express=require('express');
const http=require('http');
const sokcetIO=require('socket.io');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
const server=http.createServer(app);
const io=sokcetIO(server);



let connectedUsers=0;
let cricketScores={
    runs:0,
    wickets:0,
    overs:0,
}

//function to update scores and broadcase to all clients
function updateScores(newScores){
    cricketScores={...cricketScores,...newScores};
    io.emit('updateScores',cricketScores);
}




io.on('connection',(socket)=>{
    console.log('A user connected');
      connectedUsers++;

      io.emit('updateConnectedUsers',connectedUsers);

      //cricket scores to new client;
      socket.emit('updateScores',cricketScores);

      socket.on('disconnect',()=>{
        console.log("A user disconnected");
        connectedUsers--;

        //updated count of connected user and show on client side 
        io.emit('updateConnectedUsers',connectedUsers);
      })
});

//admin form for score update 

app.post('/admin/updatescore',(req,res)=>{
  const {runs,wickets,overs}=req.body;
  updateScores({runs,wickets,overs});
  res.status(200).json({message:`Scores updated successfully`});
})


//updating scores for one time
app.post('updatescores',(req,res)=>{
    const {runs,wickets,overs}=req.body;
    //rate limiting for overloding the api.
    updateScores({runs,wickets,overs});
    res.sendStatus(200).json({message:"Score updated successfully"});
});

//update scores with random but valid numbers every 30 second .
setInterval(()=>{
  const randomRuns=Math.floor(Math.random()*10);
  const randomWickets=Math.floor(Math.random()*2);
  const randomOvers=cricketScores.overs+0.1;

  updateScores({runs:randomRuns,wickets:randomWickets,overs:randomOvers});


},30000)




const PORT=process.env.PORT||4500;
server.listen(PORT,()=>{
    console.log(`Server is runnig at ${PORT}`)
})