import { Router } from 'express'
import authMiddleware from '../../middlewares/auth.middleware'
import homeController from '../../controllers/home/home.controlller'

const homeRoutes = Router()

homeRoutes.post('/', authMiddleware, homeController.create)
homeRoutes.get('/', authMiddleware, homeController.index)



export default homeRoutes