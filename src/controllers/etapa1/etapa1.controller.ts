import { Request, Response } from 'express'
import Etapa1 from '../../models/etapa1.entity'

export default class Etapa1Controller {
  static async store (req: Request, res: Response) {
    const { centro, concessionaria, cliente } = req.body
    //const { userId } = req.headers

    //if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

    /*if (!centro) {
      return res.status(400).json({ error: 'O Centro de Distribuição é obrigatório' })
    }
    if (!concessionaria) {
      return res.status(400).json({ error: 'O nome é obrigatório' })
    }
    if (!cliente) {
        return res.status(400).json({ error: 'A data é obrigatória' })
    }*/
  
    
    const etapa1 = new Etapa1()
    etapa1.centro = centro
    etapa1.concessionaria = concessionaria
    etapa1.cliente = cliente
    await etapa1.save()

    return res.status(201).json(etapa1)
  }

}