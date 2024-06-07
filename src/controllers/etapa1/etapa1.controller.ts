import { Request, Response } from 'express';
import Etapa1 from '../../models/etapa1.entity';
import Codigo from '../../models/codigo.entity';

export default class Etapa1Controller {
    static async store(req: Request, res: Response) {
        const { centro, concessionaria, cliente, codigoId } = req.body;

        if (!codigoId || isNaN(Number(codigoId))) {
            return res.status(400).json({ error: 'O código é obrigatório e deve ser um número válido' });
        }

        const codigoExists = await Codigo.findOneBy({ id: Number(codigoId) });

        if (!codigoExists) {
            return res.status(404).json({ error: 'Código inexistente' });
        }

        const etapa1 = new Etapa1();
        etapa1.centro = centro;
        etapa1.concessionaria = concessionaria;
        etapa1.cliente = cliente;
        etapa1.codigo = codigoExists; 

        await etapa1.save();

        return res.status(201).json(etapa1);
    }

    static async show(req: Request, res: Response) {
        const { id } = req.params;

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: 'O id é obrigatório' });
        }

        const codigo = await Codigo.findOneBy({ id: Number(id) });

        if (!codigo) {
            return res.status(404).json({ error: 'ID inexistente' });
        }

        return res.json({ id: codigo.id });
    }
}
