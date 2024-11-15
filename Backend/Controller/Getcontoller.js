import { Postmodel } from "../models/Postschema.js";

export const Getcontroller=async(req,res)=>{
    try{
        const todos=Postmodel.find();
        res.status(200).json(todos);
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch data"
        })
    }
}
