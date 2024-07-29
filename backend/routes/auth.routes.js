import express from "express"
import { loginin, logout, signup } from "../controllers/auth.controller.js";
const router=express.Router();

router.post("/signup",signup)
router.post("/login",loginin)
router.post("/logout",logout)
export default router;