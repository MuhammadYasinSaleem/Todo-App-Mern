import express from "express"
import { Deletecontroller } from "../Controller/Deletecontroller.js"
const Delrouter=express.Router()
Delrouter.delete('/todo/:id',Deletecontroller)
export default Delrouter