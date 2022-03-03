import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { instanceToPlain } from "class-transformer";

/**
 * Biblioteca para encriptografar senhas
 */
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    /**
     * Verificando se o email esta vazio
     */
    if (!email) {
      throw new Error("Email incorrect!");
    }

    /**
     * Busca usuario cadastrado
     */
    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    /**
     * Criptografando password
     */
    const passwordHash = await hash(password, 8);

    /**
     * Criando usuario
     */
    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    });

    /**
     * Salvando usuario
     */
    await usersRepository.save(user);

    return instanceToPlain(user);
  }
}
export { CreateUserService };
