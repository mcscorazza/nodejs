import express from 'express'
import TaskController from '../controllers/TaskController.js'
export const router = express.Router()

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/', TaskController.showTasks)