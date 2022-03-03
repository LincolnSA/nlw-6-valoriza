import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    /**
     * Pegando o id do usuario autenticado na aplicacao
     */
    const { user_id } = request;

    /**
     * Listando os elogios enviados
     */
    const listUserSendComplimentsService = new ListUserSendComplimentsService();
    const compliments = await listUserSendComplimentsService.execute({
      user_id,
    });

    /**
     * Retornando os elogios enviados
     */
    return response.json(compliments);
  }
}
export { ListUserSendComplimentsController };
