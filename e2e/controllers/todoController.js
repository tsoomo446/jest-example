import Todo from "../models/todo.js";


// Get todo by Id ==> api/v1/todo GET
export const getTodo = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const todo = await Todo.findById(id);
        if (!todo) {
            res.status(404).json({
                error: "Todo not found"
            })
        }
        res.status(200).json({ todo });
    } catch (error) {
        if (error.name === "CastError") {
            res.status(400).json({ error: "Please enter correct id" });
        }
    }
}


// Get todos => api/v1/todos GET
export const getTodos = async (req, res) => {
    const todos = await Todo.find({ user: req.user._id });
    res.status(200).json({ todos });
}

// Add todo => api/v1/todo POST
export const addTodo = async (req, res) => {
    try {
        req.body.user = req.user._id;
        const todo = await Todo.create(req.body);
        res.status(200).json({ todo });
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ error: "Please enter all values" });
        }
    }
}

// Delete todo => api/v1/todo DELETE
export const deleteTodo = async (req, res) => {
    const { id } = req.body;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
        res.status(404).json({ error: "Todo not found" });
    }
    res.status(200);
}