import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbconnection } from "./database/dbconnection.js"
import { ErrorMiddleware } from "./Error/Error.js"
import postrouter from "./Routes/Posttodo.js"
import Getrouter from "./Routes/Gettodo.js"
import Delrouter from "./Routes/Deletetodo.js"
import Putrouter from "./Routes/Puttodo.js"
const app=express()
dotenv.config({path:'./config/config.env'})

app.use(cors({
origin:process.env.FRONTEND_URL,
methods:["POST","GET","DELETE","PUT"],
credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/settodo',postrouter)
app.use('/',Getrouter)
app.use('/',Delrouter)
app.use('/',Putrouter)
dbconnection()
app.use(ErrorMiddleware)
export default app

