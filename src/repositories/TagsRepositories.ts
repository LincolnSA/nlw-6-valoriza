import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

/**
 * Um repositorio customizado estendendo todos os metodos de Repository,
 * na qual vai manipular o banco de dados com as informacoes da entidade
 * 'Tag' referente a coluna 'tags'
 */
@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories };
