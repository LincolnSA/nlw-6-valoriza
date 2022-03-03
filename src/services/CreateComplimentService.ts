import { getCustomRepository } from "typeorm";
import { ComplementsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplementsRepositories);
    const usersRepository = getCustomRepository(UsersRepositories);

    /**
     * Nao pode enviar elogio para si mesmo
     */
    if (user_sender === user_receiver) {
      throw new Error("Incorrect user receiver!");
    }

    /**
     * Verificando se o usuario que vai receber o elogio existe
     */
    const userReceiverExists = await usersRepository.findOne({
      id: user_receiver,
    });

    if (!userReceiverExists) {
      throw new Error("User receiver does not exists!");
    }

    /**
     * Criando o elogio
     */
    const compliment = complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    /**
     * Salvando o elogio
     */
    await complimentsRepository.save(compliment);

    return compliment;
  }
}
export { CreateComplimentService };
