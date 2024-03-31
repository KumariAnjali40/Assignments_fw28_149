const mongoose=require('mongoose');

const companySchema=mongoose.Schema({
    name:String,
    symbol:String,
},{
    versionkey:false
})

const CompanyModel=mongoose.model("company",companySchema);


module.exports={
    CompanyModel,
}