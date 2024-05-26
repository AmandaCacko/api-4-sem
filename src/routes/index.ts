import { Router } from 'express'
import taskRoutes from './task/task.routes'
import authRoutes from './auth/auth.routes'
import etapa1Routes from './etapa1/etapa1.routes'

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/task', taskRoutes)
routes.use('/etapa1', etapa1Routes)

export default routes