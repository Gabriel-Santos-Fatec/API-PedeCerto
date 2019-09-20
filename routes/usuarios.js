const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//get= consulta/retorna todos produtos
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        conn.query('select * from Usuarios;', (error, results, fields)=>{
            conn.release();
            if(error){
                res.status(500).json({
                    error: error,
                   response: null
                });
            }else{
                res.status(200).json({response: results});
            }
        });   
    });
});
//post= alteração/ inclusao produtos
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
           `insert into usuarios (Nome, Email, Senha) values (?, ?, ?);`, 
            [req.body.Nome, req.body.Email, req.body.Senha],
            (error, results, fields) => {
                conn.release();

                if(error) {
                    res.status(500).json({
                        error: error,
                       response: null
                    })
                }else{
                    res.status(201).json({
                        mensagem: 'Usuário inserido com sucesso',
                        id: resultado.insertId
                });
            }
        });
    })
    
    
    

});

//retorna produto por ID
router.get('/:id_Usuario',(req, res, next)=>{
    mysql.getConnection((error, conn)=>{
        conn.query('select * from produtos where id_produto = ${req.params.id_Usuario;}', (error, results, fields)=>{
            conn.release();
            if(error){
                res.status(500).json({
                    error: error,
                   response: null
                });
            }else{
                res.status(200).json({response: results});
            }
        });   
    });
});

//alterar produto
router.patch('/', (req, res, next) => {
    res.status(201).json({
        mensagem: 'Usuario atualizado'
    })
});

//remover produto
router.delete('/', (req, res, next) => {
    res.status(201).json({
        mensagem: 'Usuario excluido'
    })
});

module.exports = router