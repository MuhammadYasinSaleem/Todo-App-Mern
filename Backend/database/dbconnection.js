import mongoose from "mongoose";

export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"TodoApp"}).then(()=>{
        console.log("Database connected successfully");  
    }).catch((err)=>{
        console.log(`error ocurred in database connection ${err}`);  
    })
}
