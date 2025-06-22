
// require('dotenv').config({path:'./env'})
// import mongoose from "mongoose";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

import express from "express";
const app=express();


dotenv.config({
  path:'./env'
})

  
connectDb()
.then(()=>{
  app.on("error",(error)=>{
    console.error("error occured before connection",error);
  })
  app.listen(process.env.PORT||8000,()=>{
    console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT}`)
  })
 
}).catch((err)=>{
  console.log("CONNECTION FAILED ",err);
});
   



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
 