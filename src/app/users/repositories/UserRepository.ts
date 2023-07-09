import { CreateUserDTO } from "../dtos/createUserDto";
import { UserModel } from "../entities/User";

class UserRepository {
  constructor(private model: typeof UserModel) {}

  async create(user: CreateUserDTO) {
    return this.model.create(user);
  }

  async findByEmail(email: string) {
    return this.model.findOne({ email });
  }

  async find() {
    return this.model.find();
  }

  async findId(id: string) {
    return this.model.findById(id).populate("Patient");
  }

  async uptadeUser(id: string, payload: any) {
    return this.model.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}

export { UserRepository };
