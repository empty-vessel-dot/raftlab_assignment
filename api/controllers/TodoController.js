import Todo from "../models/todo.js";

// Create Todo
export const createTodo = async (req, res, next) => {
    try {
        const { title, description, status, priority, dueDate, user } = req.body;
        
        const newTodo = await Todo.create({
            title,
            description,
            status,
            priority,
            dueDate,
            user
        });

        const savedTodo = await newTodo.save();

        return res.status(200).json({ message: "Todo created successfully", todo: savedTodo });
    } catch (err) {
        next(err);
    }
};

// Update Todo
export const updateTodo = async (req, res, next) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        return res.status(200).json(updatedTodo);
    } catch (err) {
        next(err);
    }
};

// Read Todo by ID
export const getTodoById = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        return res.status(200).json(todo);
    } catch (err) {
        next(err);
    }
};

// Read All Todos
export const getAllTodos = async (req, res, next) => {
    console.log('hi')
    try {
        
        const todos = await Todo.find({user:req.params.id});
        return res.status(200).json(todos);
    } catch (err) {
        next(err);
    }
};

// Delete Todo
export const deleteTodo = async (req, res, next) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Todo has been deleted" });
    } catch (err) {
        next(err);
    }
};
