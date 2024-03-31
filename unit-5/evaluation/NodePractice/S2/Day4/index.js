const express = require('express');
const { connection,UserModel } = require('./db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: "wohho! Home page" });
});


app.post("/adduser",async(req,res)=>{
    const payload=req.body
    const user = new UserModel(payload)
    await user.save();
    res.json({msg:"new user added"})
})


//patch
// app.patch('/update/:id',async(req,res)=>{
//     const {id} = req.params;
//     const payload =req.body;
    
// })

const startServer = async () => {
  try {
    await connection;
    console.log("Connected to the database");
    
    app.listen(4500, () => {
      console.log('Server is running on port 4500');
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
