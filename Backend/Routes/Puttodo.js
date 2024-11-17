import { Putcontroller } from "../Controller/Putcontroller.js";
import express from "express"
const Putrouter=express.Router()
Putrouter.put('/todo/:id',Putcontroller)
export default Putrouter