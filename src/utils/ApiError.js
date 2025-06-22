//to streamline the api erorrs format we overrside the error class provode by node js
class ApiError extends Error{
  constructor(
    statusCode,
    message="Someting gone wrong",
    errors= [],
    stack=""
  ){
    super(message)
    this.statusCode=statusCode
    this.data=null
    this.message=message
    this.success=false;
    this.errors=errors
    if(stack){
      this.stack=stack
    }
    else
    {
      Error.captureStackTrace(this,this.constructor)
    }
  }
}