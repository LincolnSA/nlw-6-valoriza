import { Router } from "express";

/**
 * Controllers
 */
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";

/**
 * Middlewares
 */
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

/**
 * Intancias
 */
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

/**
 * 1° middleware valida o token de autenticacao
 * 2° middleware valida se o usuario eh admin
 */
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

/**
 * Listar todas as tags
 */
router.get("/tags", ensureAuthenticated, listTagsController.handle);

/**
 * Criar usuario
 */
router.post("/users", createUserController.handle);

/**
 * Listar usuarios
 */
router.get("/users", ensureAuthenticated, listUserController.handle);

/**
 * Login e autenticacao na aplicacao
 */
router.post("/login", authenticateUserController.handle);

/**
 * Criar elogios
 * middleware valida se o usuario esta atutenticado
 */
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

/**
 * Listar elogios enviados
 * middleware valida se o usuario esta atutenticado
 */
router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

/**
 * Listar elogios recebidos
 * middleware valida se o usuario esta atutenticado
 */
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

export { router };
