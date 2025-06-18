
// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

import express from "express";
dotenv.config({
  path:'./env'
})

  
connectDb();
   



/*
const app=express();
(async()=>{
  try {
     await mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)
  } catch (error) {
    console.error("ERROR: ",error);
    app.on("error",()=>{
      console.log("ERR " ,error);
      throw error;    
    })
    app.listen(process.env.PORT,()=>{
      console.log(`App is connected to ${process.env.PORT}`)
    })
  }
})()
*/


//using iffy()()
// function connectdb()
// {

// }
// connectdb;
 