
import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
const UserSchema=new Schema(

{
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
  fullname:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  avatar:{
    type:String,
    required:true,
    unique:true
  
  },
  coverpage:{
    type:String,
    required:false 
  },
  watchhistory:{
    type:[
      {
        type:Schema.Types.ObjectId,
        ref:"Video"
      }
    ]
  },
  password:{
    type:String,
    required:[true,"is required"],
    unique:true
  },

  refreshToken:{
    type:String,
    }

},{timestamps:true}
)


UserSchema.pre("save",async function(next)
{
  if(!this.isModified("password"))return next();
  this.password=await bcrypt.hash(this.password,10)
  next()
})


UserSchema.methods.isPasswordCorrect=async function(password){
  await bcrypt.compare(this.password,password);
}

UserSchema.methods.generateAccessToken=function()
{
  return jwt.sign(
    {
      _id:this._id,
      email:this.email,
      username:this.username,
      fullname:this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_EXPIRY_TIME
    }

  )
}

UserSchema.methods.generateRefreshToken=function()
{
  return jwt.sign(
    {
      _id:this._id
    },process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    
  )
}

export const User=mongoose.model("User",UserSchema);