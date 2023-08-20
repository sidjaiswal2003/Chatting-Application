import express from "express";
import authenticate from "../contollers/auth.js";

const router=express.Router()

router.post('/authenticate',authenticate )

export default router