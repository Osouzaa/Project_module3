import { CreateUserDTO } from "../dtos/createUserDto";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";

class UserService {
  constructor(private repository: UserRepository) {}

  async create(user: CreateUserDTO) {
    try {
      const userAlreadyExist = await this.repository.findByEmail(user.email);
      if (userAlreadyExist) {
        return {
          error: true,
          message: "User already exists in database",
          status: 400,
        };
      }
      const payload = {
        ...user,
        password: bcrypt.hashSync(user.password, 5),
      };

      const createdUser = await this.repository.create(payload);
      return {
        error: false,
        data: createdUser,
        message: "User created successfully",
        status: 201,
      };
    } catch (error) {
      console.log("Error creating User", error);
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
  async delete(id: string) {
    try {
      return this.repository.delete(id);
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
  async fetchUsers() {
    try {
      return this.repository.find();
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }

  async uptadeUserID(id: string, payload: CreateUserDTO) {
    try {
      if (payload.password) {
        payload.password = bcrypt.hashSync(payload.password, 5);
      }
      const userUpdated = await this.repository.uptadeUser(id, payload);

      return {
        message: "User updated",
        statusCode: 200,
        data: userUpdated,
      };
    } catch (error: any) {
      return {
        message: error.message || "Internal server error",
        statusCode: error.message ? 400 : 500,
        data: null,
      };
    }
  }

  async findUser(id: string) {
    try {
      return this.repository.findId(id);
    } catch (error: any) {
      return {
        message: error.message || "Internal server error",
        statusCode: error.message ? 400 : 500,
        data: null,
      };
    }
  }
}

export { UserService };
