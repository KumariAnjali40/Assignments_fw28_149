const express = require('express');
const mongoose = require('mongoose');
const {connection}=require('./db');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const jwtMiddleware=require('./middlewares/jstMiddleware');

const app = express();
app.use(express.json());



// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', jwtMiddleware, orderRoutes);

app.listen('4500',async()=>{
   await connection;
   console.log("connected to DB");
   console.log("Server is running at port 4500");
})





