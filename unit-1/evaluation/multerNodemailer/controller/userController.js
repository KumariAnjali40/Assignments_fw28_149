const {UserModel}=require('../models/user.models')

const bcrypt=require('bcrypt')
const {validationResult}=require('express-validator');

const mailer=require('../helpers/mailer')

const userRegister=async(req,res)=>{
    const {name,email,mobile,password,image}=req.body;
    try{
        const errors=validationResult(req);
         if(!errors.isEmpty()){
            return res.status(400).json({ msg: errors ,errors:errors.array});
         }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser){
          return res.status(400).json({ msg: "User is already registered with this email" });
        }
       const hashpassword=await bcrypt.hash(password,10);

       const users= new UserModel({
            name,
            email,
            mobile,
            password:hashpassword,
            image:req.file.filename
        })

        const userData=await users.save();
      
           mailer.sendMail(email,'Mail Verification')


        return res.status(200).json({
            success:true,
            msg:"Registerd Succesfully",
            user:userData
        });
    }
    catch(err){
        return res.status(400).json({
            success:false,
            msg:err.message
        })
    }
}

//forgot pas

module.exports={
    userRegister,
}