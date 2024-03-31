const {UserModel}=require('../models/user.models')

const bcrypt=require('bcrypt')
const {validationResult}=require('express-validator');

const mailer=require('../helpers/mailer')

const userRegister=async(req,res)=>{
    const {name,email,mobile,password,image,is_varified}=req.body;
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
            is_varified:0,
            image:req.file.filename
        })

        const userData=await users.save();
      
        const msg='<p>Hello, '+name+', please <a href="http://127.0.0.1:4000/mail-verification?id='+userData._id+'"> Varify </a> Your mail</p>'
           mailer.sendMail(email,'Mail Verification',msg)


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

const mailVerification=async(req,res)=>{
    try{
    
        if(req.query.id==undefined){
            return res.render('404');
        }

         const userData=await UserModel.findOne({_id:req.query.id})
        if(userData){

           if(userData.is_varified==1){
            return res.render('mail-verification',{message:'Mail has been already varified successfully'})
           }
          await UserModel.findByIdAndUpdate({_id:req.query.id},{

             $set:{
                is_varified:1
             }
           })
           return res.render('mail-verification',{message:'Mail has been varified successfully'})
        }else{
            return res.render('mail-verification',{message:'user not found'})
        }

    }
    catch(err){
        console.log(error.message);
      return res.render('404');
    }
}


module.exports={
    userRegister,
    mailVerification
}