import { Request, Response, NextFunction } from 'express';
import Token from '../models/token.entity';

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Token não informado' });

  console.log('Token recebido:', authorization); // Log the received token

  // Extract the token from the 'Bearer ' prefix if present
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : authorization;

  // Verify if the token exists in the database
  const userToken = await Token.findOneBy({ token });
  if (!userToken) return res.status(401).json({ error: 'Token inválido' });

  // Check if the token has expired
  if (userToken.expiresAt < new Date()) {
    await userToken.remove();
    return res.status(401).json({ error: 'Token expirado' });
  }

  // Add the userId to the request headers
  req.headers.userId = userToken.userId.toString();

  // Continue to the next middleware or route handler
  next();
}
