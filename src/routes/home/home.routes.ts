import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import homeController from '../../controllers/home/home.controlller'

const homeRoutes = Router()

homeRoutes.get('/:codigoProcesso', authMiddleware, homeController.show)


export default homeRoutes