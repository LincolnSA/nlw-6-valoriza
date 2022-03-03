/**
 * Configuracao para a aplicacao possa usar o decorators do typeorm
 */
import "reflect-metadata";
/**
 * Configuracao de variaveis de ambiente
 */
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";

/**
 * Capturar erros asyncronos pelo express
 */
import "express-async-errors";

/**
 * Para que outras aplicacoes possam realizar requisicoes ao backend
 */
import cors from "cors";

import { router } from "./routes";

/**
 * Estabelecendo conexao com o banco de dados
 */
import "./database";

const server = express();
const PORT = process.env.PORT as string | 3001;

server.use(cors());
server.use(express.json());
server.use(router);

/**
 * Tratando possiveis erros da aplicacao
 */
server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

server.listen(PORT, () =>
  console.log(`Servidor on em http://localhost:${PORT}`)
);
