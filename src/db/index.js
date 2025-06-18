import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb=async()=>{
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`MONGODB compass connected `)
  } catch (error) {
    console.log("error in connection",error);
    process.exit(1);
  }
}
export default connectDb;