const express=require('express');
const {UserModel}=require('../models/user.models')


const userRouter=express.Router();

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  id:
 *                      type: string
 *                      description: The auto-generated id of the user
 *                  name:
 *                      type: string
 *                      description: The user name
 *                  email:
 *                      type: string
 *                      description: The user email
 *                  age:
 *                      type: integer
 *                      description: The user age
 */

/**
 * @swagger
 * /users:
 *   get:
 *      summary: This will get all the users' data from the database
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: "#/components/schemas/User"
 */





userRouter.get('/',async(req,res)=>{
    try{
       const users=await UserModel.find()
       res.send(users);
    }
    catch(err){
        res.send({"err":err});
    }
})



/**
 * @swagger
 * /users/add:
 *   post:
 *      summary: To post the details of a new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          200:
 *              description: The user was successfully registered
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *          500:
 *              description: "Server error"
 */




userRouter.post('/add',async(req,res)=>{
    try{
         const user=new UserModel(req.body);
         await user.save();
         res.send({"msg":"A new user has been registered"})
    }
    catch(err){
        res.send({"err":err});
    }
})

/**
 * @swagger
 * /users/update/{id}:
 *   patch:
 *      summary: Update user details
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: The ID of the user to update
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          200:
 *              description: User details were successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *          500:
 *              description: Server error
 */






userRouter.patch('/update/:id',async(req,res)=>{
      const {id}=req.params;
      try{
          await UserModel.findByIdAndUpdate({_id:id},req.body)
          res.send({"msg":"updated the user"})
      }
      catch(err){
        res.send({"error":err})
      }
})

/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *      summary: Delete a user
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: The ID of the user to delete
 *      responses:
 *          200:
 *              description: User was successfully deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *          500:
 *              description: Server error
 */



userRouter.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params;
    try{
         await UserModel.findByIdAndDelete({_id:id})
            res.send({"msg":"deleted the user"})
    }
    catch(err){
        res.send({"msg":"err"});
    }
})





module.exports={
    userRouter,
}