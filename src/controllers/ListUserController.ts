import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
  async handle(request: Request, response: Response) {
    /**
     * Pegando todos os usuarios
     */
    const listUserService = new ListUserService();
    const users = await listUserService.execute();

    /**
     * Retornando todos os usuarios
     */
    return response.json(users);
  }
}
export { ListUserController };
