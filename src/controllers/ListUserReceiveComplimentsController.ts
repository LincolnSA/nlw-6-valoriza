import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    /**
     * Pegando o id do usuario autenticado na aplicacao
     */
    const { user_id } = request;

    /**
     * Listando elogios recebidos
     */
    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService();
    const compliments = await listUserReceiveComplimentsService.execute({
      user_id,
    });

    /**
     * Retornando todos os elogios recebidos
     */
    return response.json(compliments);
  }
}
export { ListUserReceiveComplimentsController };
