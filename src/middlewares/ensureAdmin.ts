import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export const ensureAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  /**
   * Pegando o user_id vindo do request da aplicacao da validacao do
   * middleware de autenticacao
   */
  const { user_id } = request;

  const usersRepository = getCustomRepository(UsersRepositories);

  /**
   * Buscando usuario com o determinado id
   */
  const { admin } = await usersRepository.findOne(user_id);

  /**
   * Verificando se o mesmo possui admin:true
   */
  if (admin) {
    return next();
  }

  /**
   * Status de usuario nao autenticado
   */
  return response.status(401).json({ error: "Unauthorized!" });
};
