import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import CodigoController from '../../controllers/codigo/codigo.controller'

const codigoRoutes = Router()

codigoRoutes.post('/', authMiddleware, CodigoController.store)


export default codigoRoutes