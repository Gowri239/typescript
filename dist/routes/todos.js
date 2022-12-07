"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    var newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ todos: todos, message: 'Added todo', todo: newTodo });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;
