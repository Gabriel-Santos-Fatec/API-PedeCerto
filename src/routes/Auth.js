import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const Route = Router();

/**
 * Rotas da API de Autenticação
 */
Route.post('/', AuthController.Login);

export default Route;



