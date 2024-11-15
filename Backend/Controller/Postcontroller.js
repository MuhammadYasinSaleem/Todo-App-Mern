import { Postmodel } from "../models/Postschema.js";
import ErrorHandler from "../Error/Error.js";
export const Postcontroller=async(req,res,next)=>{
    const {title,description,isCompleted,createdAt}=req.body;
    if(!title){
        return next(new ErrorHandler("Please Enter Title",400))
    }
    try{
        await Postmodel.create({title,description,isCompleted,createdAt})
        res.status(201).json({
            success:true,
            message:"Task added successfully"
        })
    }
    catch(err){
        return next(err)
    }
}
