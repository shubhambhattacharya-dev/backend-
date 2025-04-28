import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app=express();

//route 
app.get("/products" ,(req,res)=>{
    res.send("server is ready"); //server screen
})


app.listen(5000,()=>{
    connectDB();//connect db
    console.log("server started at http://localhost:5000");

})