
import dotenv from "dotenv"
dotenv.config()

import axios from "axios"
const authenticate=async (req,res)=>{
    const {username}=req.body
    try {
        const response=await axios.put("https://api.chatengine.io/users/",
        { username:username,secret:username,firstName:username},
        {headers: {"PRIVATE-KEY":process.env.PRIVATE_KEY}}
        )
        res.status(200).json(response.data)
   
        
    } catch (error) {
        res.status(404).json({msg:error})

        
    }
}

export default authenticate