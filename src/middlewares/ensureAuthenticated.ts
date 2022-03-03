import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  /**
   * Pega o token vindo do front atraves do header da requisicao
   */
  const authToken = request.headers.authorization;

  /**
   * Verifica se o token veio
   */
  if (!authToken) {
    return response.status(401).end();
  }

  /**
   * Retirando somente o token de authorization
   */
  const [, token] = authToken.split(" ");

  try {
    /**
     * Verificando se o token esta valido atraves da chave secreta
     */
    const { sub } = verify(
      token,
      "6425ddbf9cd648e1e4d33c4340d3373d"
    ) as IPayload;

    /**
     * Seta um user_id na requisicao para que a aplicacao tenha acesso
     * ao usuario autenticado atraves do id
     */
    request.user_id = sub;

    /**
     * Dando continuidade ao fluxo da aplicacao
     */
    return next();
  } catch (error) {
    /**
     * Status de usuario nao autenticado
     */
    return response.status(401).end();
  }
};
