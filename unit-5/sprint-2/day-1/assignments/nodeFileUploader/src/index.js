// import required modules
const express = require('express');
const multer = require('multer');
const path=require('path');
// export the server
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,".." ,'uploads')); //give the path name
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname);   //we can give our own name according to question.
    }
  })
  
  const upload = multer({ dest:  path.join(__dirname, 'uploads'),storage: storage });
  var multipleUpload=upload.single('avatar')


  
app.get('/', (req, res) => {
    res.status(200).json({ message: 'welcome to server' });
});

app.post('/upload', multipleUpload, (req, res) => {
    res.json({
        message: "file uploaded successfully"
     });
});


app.listen(4500, () => {
    console.log(`Server is running on port 4500`);
});

module.exports = app;


