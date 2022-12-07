import {Router} from 'express';

import {Todo} from '../models/todo';

type RequestBody = {text: string}
type RequestParams = {todoId: string}

var todos: Todo[] = [];

const router = Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next) => {
    const body = req.body as RequestBody;
    var newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo)
    res.status(201).json({todos:todos,message:'Added todo',todo: newTodo})
})

router.delete('/todo/:todoId',(req,res,next) =>{
    const params = req.params as RequestParams
    todos = todos.filter(todoItem => todoItem.id !== params.todoId)
    res.status(200).json({message: 'Deleted todo',todos: todos})
})
export default router

