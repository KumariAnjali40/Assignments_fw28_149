const {check}=require('express-validator')

exports.registerValidator=[
   check('name','Name is required').not().isEmpty(),
   check('email','Please include a valid is email').isEmail().normalizeEmail({
     gemail_remove_dots:true
   }),
   check('mobile','number should be contains 10 digits').isLength({
    min:10,
    max:10
   }),
   check('password','password must be greater than 6 characters, and contains at least one uppercase one lowercase letter and one number, and one special character').isStrongPassword({
     minLength:6,
     minLowercase:1,
     minUppercase:1,
     minNumbers:1,
     minSymbols:1
   }),
   check('image').custom((value,{req})=>{
    if(req.file.mimetype==='image/jpg' || req.file.mimetype==='image/jpeg' ||req.file.mimetype==='image/png'){
            return true;
    }else{
         return false;
    }
   }).withMessage("Please upload an image Jpeg,PNG")
];