import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
  async handle(request: Request, response: Response) {
    /**
     * Recebendo os dados da requisicao do usuario
     */
    const { name } = request.body;

    /**
     * Criando a tag
     */
    const createTagService = new CreateTagService();
    const tag = await createTagService.execute({ name });

    /**
     * Retornando a tag
     */
    return response.json(tag);
  }
}
export { CreateTagController };
