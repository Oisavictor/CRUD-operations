const { Schema, model} = require('mongoose')

const todoSchema = new Schema ({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 150
    },
    },
    {timestamps: true}
)

const todoModel = model('todo', todoSchema);

module.exports = todoModel;