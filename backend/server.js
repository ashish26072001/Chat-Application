import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieparser from "cookie-parser"
import { app, server } from "./socket/socket.js"


const PORT=process.env.PORT||5000
dotenv.config();
app.use(express.json());//to parse the incoming request with json payload(from req.body)
app.use(cookieparser());// to parse the incoming cookie from req.cookies
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
server.listen(PORT,()=>{console.log(`server runing on port ${PORT}`) ,connectToMongoDB()})