import JWT from "jsonwebtoken";
import { CreateLoginDTO } from "../dtos/createLoginDto";
import { UserRepository } from "../../users/repositories/UserRepository";
import { makeError } from "../../../utils/error-handle";
import { Crypt } from "../../../utils/crypt";

class AuthService {
  constructor(private userRepository: UserRepository) {}

  async login(body: CreateLoginDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(body.email);

    if (!userAlreadyExists) {
      return makeError("E-mail/senha inválidos", 400);
    }

    const passwordIsValid = Crypt.compare(
      body.password,
      userAlreadyExists.password
    );
       
    if (!passwordIsValid) {
      return makeError("E-mail/senha inválidos", 400);
    }

    const payload = {
      id: userAlreadyExists.id,
      email: userAlreadyExists.email,
    };

    const secret = process.env.JWT_SECRET_KEY as string;

    const options = { expiresIn: "15h" };

    const token = JWT.sign(payload, secret, options);

    return { token, user: userAlreadyExists };
  }
}

export { AuthService };
