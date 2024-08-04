
import { Request, Response } from 'express';

export default function prueba1(req: Request, res: Response) {

    res.status(200).json({ name: 'Mensaje de Start' })
}

