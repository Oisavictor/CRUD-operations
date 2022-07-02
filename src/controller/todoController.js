const Todo = require('../model/Todo')

// create/add todo
exports.createTodo = async (req, res) => {
    try {
        let todo = await  req.body;
        let created = await Todo.create(todo);
        if(!created) 
            return res.status(400).json({
                success: false,
                message: 'Todo list creation failed',
            });
        return res.status(201).json({
            success: true,
            message: 'Todo list created successfully',
            todo: created,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
}


// get all todo list 
exports.getAllTodo = async (req, res) => {
    try {
        let todo = await Todo.find();
        if (todo.length == 0)
            return res.status(404).json({
                success: false,
                message: 'No Todo lists were found',
            });
        res.status(200).json({
            success: true,
            message: 'Todo list found',
            todo,
            count: todo.length,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
}

// get single todo list 
exports.getTodo = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let todo = await Todo.findOne(id);
        if (!todo) 
            return res.status(404).json({
                success: false,
                message: 'Todo list not found',
            });
        return res.status(200).json({
            success: true,
            message: 'Todo list found',
            todo,
        });
    }   catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
};

// update todo list
exports.updateTodo = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let todo = await req.body;
        let update = await Todo.findOneAndUpdate(id, todo, { new: true });
        if (!update) 
            return res.status(400).json({
                success: false,
                message: 'Todo list not Updated',
            });

            return res.status(200).json({
            success: true,
            message: 'Todo list updated',
            todo: update,
        });
    }   catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
};

// delete todo list
exports.deleteTodo = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let deleted = await Todo.findOneAndRemove(id);
        if (!deleted) 
            return res.status(400).json({
                success: false,
                message: 'Todo list not deleted',
            });
            return res.status(200).json({
            success: true,
            message: 'Todo list deleted successfully',
            todo: deleted,
        });
    }   catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
};
