import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(request: Request, response: Response) {
    /**
     * Pegando todas as tags
     */
    const listTagsService = new ListTagsService();
    const tags = await listTagsService.execute();

    /**
     * Retornando todas as tags
     */
    return response.json(tags);
  }
}
export { ListTagsController };
