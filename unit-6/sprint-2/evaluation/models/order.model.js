const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    symbol:String,
    price:Number,
    time:Date
},{
    versionkey:false
})

const OrderModel=mongoose.model("order",orderSchema);


module.exports={
    OrderModel,
}