import { Router } from 'express';
import { teste, ListarPedidos, edit, add, list, search, del, getMemberByProject, getmembersprojects } from '../controllers/PedidosController';
import Access from '../middleware/VerifyToken';
import { listMembers } from '../models/PedidosModel';

const Route = Router ();
Route.get('/list', list);
Route.post('/lista', add);

export default Route;

