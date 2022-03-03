import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    /**
     * Recebendo os dados da requisicao do usuario
     */
    const { user_receiver, tag_id, message } = request.body;
    /**
     * Pegando o id do usuario autenticado na aplicacao
     */
    const { user_id } = request;

    /**
     * Criando o elogio
     */
    const createComplimentService = new CreateComplimentService();
    const compliment = await createComplimentService.execute({
      user_sender: user_id,
      user_receiver,
      tag_id,
      message,
    });

    /**
     * Retornando o elogio
     */
    return response.json(compliment);
  }
}
export { CreateComplimentController };
