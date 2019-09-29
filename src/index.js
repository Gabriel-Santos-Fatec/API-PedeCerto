import express from 'express';
import bodyParser from 'body-parser';

import Auth from './routes/Auth';
import Pedidos from './routes/Pedidos';
import Produtos from './routes/Produtos';
import Promocoes from './routes/Promocao';
import Projects from './routes/Project';
import Usuarios from './routes/Usuarios';

import CORS from 'cors';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());


app.use('/v1/auth', Auth);
app.use('/v1/projects', Projects);
app.use('/v1/pedidos', Pedidos);
app.use('/v1/produtos', Produtos);
app.use('/v1/promocoes', Promocoes);
app.use('/v1/usuarios', Usuarios);


app.listen(8080);