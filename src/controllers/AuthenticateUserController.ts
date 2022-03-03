import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    /**
     * Recebendo os dados da requisicao do usuario
     */
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserService();

    /**
     * Criando o token de autenticacao
     */
    const token = await authenticateUserService.execute({ email, password });

    /**
     * Retorna o token gerado ao font end
     */
    return response.json(token);
  }
}
export { AuthenticateUserController };
