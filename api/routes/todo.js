import  express from "express";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "../controllers/TodoController.js";



const router=express.Router();

router.post("/create-todo",createTodo)
router.get("/:id",getTodoById);
router.get("/user/:id",getAllTodos);
router.delete("/:id",deleteTodo);
router.put("/update/:id",updateTodo);



export default router