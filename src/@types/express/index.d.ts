/**
 * Sobrescreita do tipo Request
 * para adicionar uma nova variavel user_id na requisicao da aplicacao
 */
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
