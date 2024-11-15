import express from "express"
import { Getcontroller } from "../Controller/Getcontoller"
const Getrouter=express.router()
Getrouter.get('/',Getcontroller)
export default Getrouter
