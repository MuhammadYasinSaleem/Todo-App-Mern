import { Postmodel } from "../models/Postschema.js";

export const Deletecontroller=async(req,res)=>{
    try{
    const {id}=req.params;
    const todo=await Postmodel.findByIdAndDelete(id)
    if(!todo)
    {
        res.status(404).json({
            success:false,
            message:"Todo not found"
        })
    }
    else
    {
        res.status(200).json({
            success:true,
            message:"Todo deleted successfully"
        })
    }
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to delete todo",
            error:error.message
        })
    }
}