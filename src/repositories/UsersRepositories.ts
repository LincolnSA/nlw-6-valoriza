import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

/**
 * Um repositorio customizado estendendo todos os metodos de Repository,
 * na qual vai manipular o banco de dados com as informacoes da entidade
 * 'User' referente a coluna 'users'
 */

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };
