import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagRepository = getCustomRepository(TagsRepositories);

    /**
     * Verificando se o name esta vazio
     */
    if (!name) {
      throw new Error("Name incorrcet!");
    }

    /**
     * Verificando se a tag ja existe
     */
    const tagAlreadyExists = await tagRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    /**
     * Criando a tag
     */
    const tag = tagRepository.create({ name });

    /**
     * Salvando a tag
     */
    await tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
