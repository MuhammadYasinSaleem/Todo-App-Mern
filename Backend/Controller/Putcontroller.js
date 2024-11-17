import { Postmodel } from "../models/Postschema.js";

export const Putcontroller=async(req,res)=>{
    try{
        const {id}=req.params;
        const updatedata=req.body;
        const Updatetodo=await Postmodel.findByIdAndUpdate(id,updatedata,{
            new:true,
            runValidators:true
        });
        if(!Updatetodo)
        {
            res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Todo updated successfully",
            data:updatedata
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to update todo",
            error:error.message
        })
    }
}
