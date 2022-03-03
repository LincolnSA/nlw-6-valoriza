import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const KEY_SECRET_TOKEN = process.env.KEY_SECRET_TOKEN;

    const usersRepository = getCustomRepository(UsersRepositories);

    /**
     * Verificando se usuario esta cadastrado
     */
    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect!");
    }

    /**
     * Comparando valores de password
     */
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }

    /**
     * Gerando token de autenticacao
     */
    const token = sign({ email: user.email }, KEY_SECRET_TOKEN, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}
export { AuthenticateUserService };
