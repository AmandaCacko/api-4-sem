import { Request, Response } from 'express'
import Codigo from '../../models/codigo.entity'

export default class CodigoController {
  static async store (req: Request, res: Response) {
    const { tipo, nome, dataInicio, dataFim } = req.body
    //const { userId } = req.headers

    //if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

    if (!tipo) {
      return res.status(400).json({ error: 'O tipo é obrigatório' })
    }
    if (!nome) {
      return res.status(400).json({ error: 'O nome é obrigatório' })
    }
    if (!dataInicio) {
        return res.status(400).json({ error: 'A data é obrigatória' })
    }
    if (!dataFim) {
        return res.status(400).json({ error: 'A data é obrigatória' })
    }
    
    const codigo = new Codigo()
    codigo.tipo = tipo
    codigo.nome = nome
    codigo.dataInicio = dataInicio
    codigo.dataFim = dataFim
    await codigo.save()

    return res.status(201).json(codigo)
  }
}