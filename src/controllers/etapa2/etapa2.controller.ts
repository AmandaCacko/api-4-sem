import { Request, Response } from 'express'
import Etapa2 from '../../models/etapa2.entity'

export default class Etapa2Controller {
  static async store (req: Request, res: Response) {
    const { nomeFuncionario, foraCaminhao, dentroCaminhao } = req.body
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
  
    
    const etapa2 = new Etapa2()
    etapa2.nomeFuncionario = nomeFuncionario
    etapa2.foraCaminhao = foraCaminhao
    etapa2.dentroCaminhao = dentroCaminhao
    await etapa2.save()

    return res.status(201).json(etapa2)
  }

}