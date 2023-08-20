import  express from "express";
import cors from "cors"//By using this we can call the server from any other version (outside of the host machine)

import router from "./Routes/auth.js";
import mongoose from "mongoose";


const app=express()
app.use(express.json())
app.use(cors({origin:true}))


app.use('/',router)



app.listen(8080)