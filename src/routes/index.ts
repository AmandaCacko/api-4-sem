import { Router } from 'express'
import taskRoutes from './task/task.routes'
import authRoutes from './auth/auth.routes'
import etapa1Routes from './etapa1/etapa1.routes'
import etapa2Routes from './etapa2/etapa2.routes'
import codigoRoutes from './codigo/codigo.routes'
import homeRoutes from './home/home.routes'

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/task', taskRoutes)
routes.use('/codigo', codigoRoutes)
routes.use('/etapa1', etapa1Routes)
routes.use('/etapa2', etapa2Routes)
routes.use('/home', homeRoutes)

export default routes