class ErrorHandler extends Error{
    constructor(message,statuscode)
    {
        super(message);
        this.statuscode=statuscode;
    }
}

const ErrorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "internal server arror";
    err.statuscode=err.statuscode|| 500;
    return res.status(err.statuscode).json({
        success:false,
        message:err.message

    })

}

export default ErrorHandler