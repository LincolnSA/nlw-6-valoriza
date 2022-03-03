import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { instanceToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepositories);

    const tags = await tagsRepository.find();

    // modificando os dados da tag com atributos adicionais
    // especificado na entity
    return instanceToPlain(tags);
  }
}
export { ListTagsService };
