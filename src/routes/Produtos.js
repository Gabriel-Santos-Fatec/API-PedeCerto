import { Router } from 'express';
import { edit, add, list, search, del } from '../controllers/ProdutosController';
import Access from '../middleware/VerifyToken';

const Route = Router ();
Route.get('/list', list);
Route.post('/add', add);
Route.delete('/del', del);
Route.patch('/edit', edit);
Route.propfind('/search', search);


export default Route;

