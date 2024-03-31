const express=require('express');
const {auth}=require('../middleware/auth.middleware');
const {access}=require('../middleware/access.middleware');
 const {BookModel}=require('../models/book.model');
const jwt=require('jsonwebtoken');

const bookRouter=express.Router();


//add the book
bookRouter.post('/add',auth,access(["admin","librarian"]),async(req,res)=>{
      const {title,genre,author,published_year}=req.body;
      const book=await BookModel.findOne({title:title});
      console.log(book);
      console.log(title);

      const book1=new BookModel({title,genre,author,published_year});

      await book1.save();
      console.log(book1);
      res.status(200).json({msg:"Book Added",book1});

})




//get the book
bookRouter.get('/',auth,access(['admin','librarian','reader']),async(req,res)=>{

    try{
    const book=await BookModel.find(req.query);
    res.status(200).json({book_list:book});
    res.json({msg:" All user can get books",});
    }catch(err){
        res.json({msg:err});
    }
})




//update
bookRouter.patch('/update/:id',auth,access(["admin"]),async(req,res)=>{
    const {id}=req.params;
    const payload=req.body;
    try{
         await BookModel.findByIdAndUpdate({_id:id});
         res.status(200).json({msg:"The book has been Updated "});
    }
    catch(err){
        res.status(400).json({msg:err});
        console.log(err);
    }
})


//delete

bookRouter.delete('/delete/id',auth,access(["admin"]),async(req,res)=>{
    const {id}=req.params;
    try{
        await BookModel.findByIdAndDelete({_id:id});
        res.status(200).json({msg:"Book has been deleted"});
    }
    catch(err){
        res.status(400).json({error:err});
    }
})



module.exports={
    bookRouter,
}