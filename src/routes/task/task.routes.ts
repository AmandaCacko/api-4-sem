import { Router } from 'express'
import TaskController from '../../controllers/task/task.controller'

const taskRoutes = Router()

taskRoutes.post('/', TaskController.store)
taskRoutes.get('/', TaskController.index)
taskRoutes.get('/:id', TaskController.show)
taskRoutes.delete('/:id', TaskController.delete)
taskRoutes.put('/:id', TaskController.update) // usamos o put para atualizar todos os campos

export default taskRoutes