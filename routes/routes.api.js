const router = require('express').Router()

const todosRouter = require('../modules/todos/todos.api')
const subtasksRouter = require('../modules/subtasks/subtasks.api')

router.use('/todos', todosRouter)
router.use('/todos', subtasksRouter)

module.exports= router