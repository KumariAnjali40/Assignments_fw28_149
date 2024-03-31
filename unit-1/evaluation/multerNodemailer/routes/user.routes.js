const express = require('express');

const userRouter=express.Router();
// const bodyParser=require('body-parser');
// userRouter.use(bodyParser.json());
// userRouter.use(bodyParser.urlencoded({extended:true}))
userRouter.use(express.json())
const path=require('path');
const multer=require('multer');

userRouter.use(express.static('public'));


const storage=multer.diskStorage({
    destination:function(req,file,cb){
     
     if(file.mimetype==='image/jpg' || file.mimetype==='image/jpeg' ||file.mimetype==='image/png'){

        cb(null,path.join(__dirname,'../public/images'));

     }
    },
    filename:function(req,file,cb){
        const name=Date.now()+'_'+file.originalname;
        cb(null,name)
    }
})

const fileFilter=(req,file,cb)=>{
   if(file.mimetype==='image/jpg' || file.mimetype==='image/jpeg' ||file.mimetype==='image/png'){
      cb(null,true);
   }else{
    cb(null,false);
   }
}


const upload=multer({dest:  path.join(__dirname, 'images'),storage:storage,fileFilter:fileFilter})

const userController=require('../controller/userController')
const{registerValidator}=require('../helpers/validation')


userRouter.post('/register',upload.single('image'),registerValidator,userController.userRegister)

//for forgot password
// userRouter.post('/forgot-password',passwordResetValidator,userController.forgotPassword)



module.exports={
    userRouter,
}

