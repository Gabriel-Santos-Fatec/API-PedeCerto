const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')//aceita formaato json

const rotaProdutos = require('./routes/produtos')
const rotaPedidos = require('./routes/pedidos')
const rotaPromocao = require('./routes/promocao')
const rotaUsuarios = require('./routes/usuarios')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );

        if (req.method === "OPTIONS") {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({})
        }
        next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);
app.use('/promocao', rotaPromocao);
app.use('/usuarios', rotaUsuarios);

app.use((req, res, next)=>{
    const erro = new Error('nao encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;
module.exports = this.router;

