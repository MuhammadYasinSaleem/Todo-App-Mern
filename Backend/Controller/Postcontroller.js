import { Postmodel } from "../models/Postschema";

export const Postcontroller=async(req,res,next)=>{
    const {title,description,isCompleted,createdAt}=req.body;
    if(!title){
        return res.status(400).json({
            succes:false,
            message:"Please enter the title of task"
        })
    }
    try{
        await Postmodel.create({title,description,isCompleted,createdAt})
        res.status(200).json({
            success:true,
            message:"Task added successfully"
        })
    }
    catch(err){
        return next(err)
    }
}
