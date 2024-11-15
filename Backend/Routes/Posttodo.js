import express from "express"
import { Postcontroller } from "../Controller/Postcontroller.js"
const postrouter=express.Router()
postrouter.post('/send',Postcontroller)
export default postrouter