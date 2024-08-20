import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'yourSecretKey';

interface JwtPayload {
    id: number;
    nome: string;
  }
  
  declare global {
    namespace Express {
      interface Request {
        user?: JwtPayload;
      }
    }
  }
  
// Middleware de autenticação
const authenticate = (req: Request, res: Response, next: NextFunction) => {
const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }
  
    try {
      const decoded = jwt.verify(token, secretKey) as JwtPayload;
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  };

export default authenticate;