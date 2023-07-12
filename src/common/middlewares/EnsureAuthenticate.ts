import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

// Interface estendendo a interface Request padrão
interface AuthenticatedRequest extends Request {
  userId?: string;
}

class EnsureAuthenticate {
  static async execute(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) {
    const { authorization = null } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: "Token not found" });
    }

    const [, token] = authorization.split(" ");

    try {
      const decodedToken = JWT.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      );
      const userId = (decodedToken as { id: string }).id;

      // Verifica se o ID no token corresponde ao ID do recurso sendo atualizado
      if (req.params.id && req.params.id !== userId) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Adicione o ID do usuário ao objeto de solicitação para uso posterior
      req.userId = userId;

      next();
    } catch (err: any) {
      return res.status(401).json({ error: "Invalid token" });
    }
  }
}

export { EnsureAuthenticate };
