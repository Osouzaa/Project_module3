import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { makeCreateUserSchema } from "../schemas/createUserSchema";
import { makeDeleteUserSchema } from "../schemas/deleteUserSchema";


class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req;

    try {
      await makeCreateUserSchema().validate(body);
    } catch (error: any) {
      return res.status(400).json({
        errors: error.errors,
      });
    }
    const result = await this.service.create(body);
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(201).json(result);
  }

  async delete(req: Request, res: Response) {
    const { params } = req;

    try {
      await makeDeleteUserSchema().validate(params);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }

    const result = (await this.service.delete(params.id)) as any;
    if ("error" in result) {
      return res.status(result.status).json(result);
    }

    return res.status(200).json({ message: "User deleted successfully" });
  }

  async find(req: Request, res: Response) {
    try {
      const users = await this.service.fetchUsers();
      return res.status(200).json(users);
    } catch (error) {
      console.log("Erro ao buscar usuários", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno do servidor",
        status: 500,
      });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;

    const result = await this.service.uptadeUserID(id, payload);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  async findById(req: Request, res: Response) {
    try {
      const userId = req.params.id;

      const user = await this.service.findUser(userId);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          error: true,
          message: "Usuário não encontrado",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Internal server error",
      });
    }
  }
  
}

export { UserController };
