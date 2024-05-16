import  express from "express";
import { register,login, AllUser } from "../controllers/authController.js";

const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/",AllUser);


export default router