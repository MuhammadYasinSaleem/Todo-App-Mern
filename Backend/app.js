import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbconnection } from "./database/dbconnection.js"
import postrouter from "./Routes/Posttodo.js"

const app=express()
dotenv.config({path:'./config/config.env'})

app.use(cors({
origin:process.env.FRONTEND_URL,
methods:["POST"],
credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({encoded:true}))
app.use('/settodo',postrouter)
dbconnection()
export default app

