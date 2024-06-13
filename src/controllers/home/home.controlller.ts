import { Request, Response } from 'express'
import Home from '../../models/home.entity'

export default class homeController {
  static async create(req: Request, res: Response) {
    const { codigoProcesso, responsavel, etapa, progresso } = req.body
    const { userId } = req.headers
    
    const home = new Home()
    home.codigoProcesso = codigoProcesso
    home.responsavel = responsavel
    home.etapa = etapa
    home.progresso = progresso
    await home.save()

    return res.status(201).json(home)
  }

  static async index(req: Request, res: Response) {
    const homes = await Home.find({
      take: 3, 
      order: {
        codigoProcesso: 'ASC'
      }
    })
    return res.json(homes)
  }
}

/*export default class homeController {
    static async show (req: Request, res: Response) {
    const { codigoProcesso } = req.params

    const home = await Home.findOneBy({codigoProcesso: Number(codigoProcesso)})
    return res.json(home)
  }

}*/