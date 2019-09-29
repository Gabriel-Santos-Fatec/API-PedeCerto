import { Router } from 'express';
import { edit, add, list, search, del } from '../controllers/PromocaoController';
import Access from '../middleware/VerifyToken';

const Route = Router ();
Route.get('/list', list);
Route.post('/add', add);
Route.post('/del', del);
Route.post('/edit', edit);
Route.post('/search', search);


export default Route;

