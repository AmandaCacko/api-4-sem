import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import Etapa2Controller from '../../controllers/etapa2/etapa2.controller'

const etapa2Routes = Router()

etapa2Routes.post('/', authMiddleware, Etapa2Controller.store)


export default etapa2Routes