import { FilesRepository } from "../../files/repositories/FilesRepository";
import { CreateUserDTO, CreateUserServiceDTO } from "../dtos/createUserDto";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";

class UserService {
  constructor(
    private repository: UserRepository,
    private filesRepository: FilesRepository
  ) {}

  async create(user: CreateUserServiceDTO) {
    try {
      const userAlreadyExist = await this.repository.findByEmail(user.email);
      if (userAlreadyExist) {
        return {
          error: true,
          message: "User already exists in database",
          status: 400,
        };
      }
      const photo = await this.filesRepository.create(user.photo);

      const payload = {
        ...user,
        password: bcrypt.hashSync(user.password, 5),
        photo: photo.id,
      };

      const createdUser = await this.repository.create(payload);
      return { ...(createdUser as any)._doc, photo };
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
}

export { UserService };
