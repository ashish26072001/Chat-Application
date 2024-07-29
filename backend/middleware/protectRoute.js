import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
const protectRoute= async(req,res,next)=>{
 try{
const token=req.cookies.jwt;// get token from cookie whose name is jwt by using the middleware cookieParser in server file
if(!token){
return res.status(401).json({error:"Unauthorized-no token provided"})
}
const decoded=jwt.verify(token,process.env.jWT_SECRET);
if(!decoded){
    return res.status(401).json({error:"Unauthorized-Invalid Token"})
    }
    const user=await User.findById(decoded.userId).select("-password");// get user without the password field
    if(!user){
        return res.status(404).json({error:"user not found"})
    }
    req.user=user;//send the user to messageroute and conversation routes
    next();


 }catch(error){
console.log("error in protectroute middleware:",error.message)
res.status(500).json({error:"Internal Server Error"})
 }
}
export default protectRoute;
