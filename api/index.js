import express from "express"
import dotenv from"dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import cors from 'cors';
import TodoRoute from "./routes/todo.js"

const app=express()
dotenv.config()

app.use(cors({ origin: 'https://taskassignmentrfl-qm4w4a7vw-harsh-sharmas-projects-090105a0.vercel.app' }));

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error;
    }

    };
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb disconnected")
    })
    
    app.use(cors());

    app.use(express.json())
    app.use("/api/auth",authRoute);
    app.use("/api/todo",TodoRoute);

app.listen(8100,()=>{
    connect();
    console.log("connected")

})
