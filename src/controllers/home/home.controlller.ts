import { Request, Response } from 'express'
import Home from '../../models/home.entity'


export default class homeController {
    static async show (req: Request, res: Response) {
    const { codigoProcesso } = req.params

    const home = await Home.findOneBy({codigoProcesso: Number(codigoProcesso)})
    return res.json(home)
  }

}