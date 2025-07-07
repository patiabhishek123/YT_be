import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from 'fs'
cloudinary.config(
  { 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    }
);

 const uploadOnCloudinary=async(localFilePath)=>{
    try {
     if(!localFilePath)return null;
     else
     {
      cloudinary.uploader.upload(localFilePath,
        {
          resource_type:"auto"
        }
        
      )
      //file had been uploaded
        
      console.log("file has been uploaded",response.url);
      return response;

     }
  
} catch (error) {
  //since we store files to or local server and have falied to upload to the coudinary,we need to get free from mallicos useless files from oursever
  //this is done in error section
  fs.unlinkSync(localFilePath)
  return null; //remove the ocally saved temperory saved file as the temporary file as the upoad operarions got failed
}
  }
