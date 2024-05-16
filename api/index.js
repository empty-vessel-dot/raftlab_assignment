import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import cors from 'cors'; // Import cors
import TodoRoute from "./routes/todo.js";

const app = express();

// Apply cors middleware with specific options
app.use(cors({
    origin: 'https://taskassignmentrfl-qm4w4a7vw-harsh-sharmas-projects-090105a0.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/todo", TodoRoute);

app.listen(8100, () => {
    connect();
    console.log("Server connected");
});