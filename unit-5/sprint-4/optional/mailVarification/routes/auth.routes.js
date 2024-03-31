const express=require('express');


const authRouter=express();

authRouter.use(express.json());

const userController=require('../controller/userController')

authRouter.get('/mail-verification',userController.mailVerification)


module.exports={
    authRouter,
}