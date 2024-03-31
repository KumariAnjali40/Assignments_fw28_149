 //let's create schema. //productSchema and model.

const mongoose=require('mongoose');

 const productSchema=mongoose.Schema({
    name:{type:String, required:true},
    qty:{type:Number, required:true},
    
},{
   versionKey:false
})

const ProudctModel=mongoose.model('product',productSchema)
