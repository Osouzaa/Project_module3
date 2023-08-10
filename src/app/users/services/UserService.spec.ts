import { FileModule } from "../../files/FilesModule";
import { FilesModel } from "../../files/entities/Files";
import { FilesRepository } from "../../files/repositories/FilesRepository";
import { UserModel } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "./UserService";

const Repository = new UserRepository(UserModel);
const filesRepository = FileModule.build().repository;
const Service = new UserService(Repository, filesRepository);

describe("UserService.create", () => {
  it("Created new user", async () => {
    const CreateUserMock = {
      name: "Gabriel",
      email: "gabriel@teste.com",
      password: "123123",
      photo: {
        filename: "image.png",
        mimetype: "image/png",
      },
    }

    const result = await Service.create(CreateUserMock);

    expect(result.name).toBe("Gabriel");
    expect(result.email).toBe("gabriel@teste.com");
    expect(result.password).toBe("123123");
    expect(result.photo).toEqual({
      filename: "nome_do_arquivo",
      mimetype: "tipo_do_arquivo",
    });
  }, 20000);
});
