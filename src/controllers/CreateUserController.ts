import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, repsonse: Response) {
    /**
     * Recebendo os dados da requisicao do usuario
     */
    const { name, email, admin, password } = request.body;

    /**
     * Criando um novo usuario
     */
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      admin,
      password,
    });

    /**
     * Retornando o usuario
     */
    return repsonse.json(user);
  }
}
export { CreateUserController };
