import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";

/**
 * Um repositorio customizado estendendo todos os metodos de Repository,
 * na qual vai manipular o banco de dados com as informacoes da entidade
 * 'Compliment' referente a coluna 'compliments'
 */

@EntityRepository(Compliment)
class ComplementsRepositories extends Repository<Compliment> {}
export { ComplementsRepositories };
