



const asyncHandler=(requesrHandler)=>{
  Promise.resolve(requesrHandler(req,res,next)).catch((err)=>{next(err)});
}











export {asyncHandler};

//TRY CATCH WAY

// const asyncHandler=(jn)=>async(err,req,res,next)=>
//   {
//   try {
    
//   } catch (error) {
//     res.status(500||err.code).json(
//       {
//         success:false,
//         message:err.message
//       }
//     )
//   }
// }