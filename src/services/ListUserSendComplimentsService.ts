import { getCustomRepository } from "typeorm";
import { ComplementsRepositories } from "../repositories/ComplimentsRepositories";
import { instanceToPlain } from "class-transformer";

interface IUserRequest {
  user_id: string;
}

/**
 * Retorna todos os elogios enviados pelo o usuario logado na aplicacao
 * user_id vindo do token de autenticacao
 */
class ListUserSendComplimentsService {
  async execute({ user_id }: IUserRequest) {
    const complimentsRepository = getCustomRepository(ComplementsRepositories);

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return instanceToPlain(compliments);
  }
}
export { ListUserSendComplimentsService };
