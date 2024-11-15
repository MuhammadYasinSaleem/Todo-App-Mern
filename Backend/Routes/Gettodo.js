import express from "express"
import { Getcontroller } from "../Controller/Getcontoller.js"
const Getrouter=express.Router()
Getrouter.get('/',Getcontroller)
export default Getrouter
