import { Router } from 'express';
import { add, edit, list, search, del } from '../controllers/UserController';
import Access from '../middleware/VerifyToken';

const Route = Router();

Route.post('/', Access(3), add);
Route.put('/:id', Access(3), edit);
Route.get('/', Access(3), list);
Route.get('/:id', Access(3), search);
Route.delete('/:id', Access(3), del);

export default Route;
