import { CreateFilesDTO } from "../dtos/createFilesDTO";
import { FilesModel } from "../entities/Files";

class FilesRepository {
  constructor(private model: typeof FilesModel) {}

  async create(files: CreateFilesDTO) {
    return this.model.create(files);
  }
}

export { FilesRepository };
