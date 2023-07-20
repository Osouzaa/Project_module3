import { CreateFilesDTO } from "../../files/dtos/createFilesDTO";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  photo?: string;
}

interface CreateUserServiceDTO {
  name: string;
  nickname: string;
  email: string;
  password: string;
  photo: CreateFilesDTO;
}

export { CreateUserServiceDTO, CreateUserDTO };
