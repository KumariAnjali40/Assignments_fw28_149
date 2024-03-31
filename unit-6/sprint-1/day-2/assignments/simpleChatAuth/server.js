const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors=require('cors');
const {connection}=require('./db');
const {userRouter}=require('./routes/user.routes');
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);
// const secretKeyJWT="pandey"
app.use(express.static('public'));
app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Hello world");
})
// app.get('/login',(req,res)=>{
//    const token= jwt.sign({_id:"anjali"},secretKeyJWT);
//    res.cookie("token",token,{httpOnly:true,secure:true,sameSite:"none"}).json({msg:"Login success"});
// })

const user=false;
io.use((socket,next)=>{
    cookieParser()(socket.request,socket.request.res,(err)=>{
        if(err){
            return next(err);
        }
            const token=socket.request.cookies.token;
            if(!token){
                return next(new Error("Authentication Error"));
            }
                const decoded=jwt.verify(token,"masai");
            
                next();
    })
})




io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('join', (username) => {
        socket.username = username;
        io.emit('chat message', { user: 'System', message: `${username} has joined the chat` });
    });
    socket.on('chat message', (message) => {
        io.emit('chat message', { user: socket.username, message });
    });

    socket.on('disconnect', () => {
        io.emit('chat message', { user: 'System', message: `${socket.username} has left the chat` });
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, async() => {
    try{
        await connection
        console.log("Connected to db");
        console.log("Server is running at 4500");
       }
       catch(err){
        console.log(err);
       }
});
