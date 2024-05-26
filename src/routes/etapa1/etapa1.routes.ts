import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import Etapa1Controller from '../../controllers/etapa1/etapa1.controller'

const etapa1Routes = Router()

etapa1Routes.get('/:id', authMiddleware, Etapa1Controller.show)
etapa1Routes.post('/', authMiddleware, Etapa1Controller.store)


export default etapa1Routes