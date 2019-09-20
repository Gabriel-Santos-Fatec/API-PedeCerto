const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//get= consulta/retorna todos produtos
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        conn.query('select * from Produto;', (error, results, fields)=>{
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
           `insert into Produto (Nome, Valor) values (?, ?);`, 
            [req.body.Nome, req.body.Valor],
            (error, results, fields) => {
                conn.release();

                if(error) {
                    res.status(500).json({
                        error: error,
                       response: null
                    })
                }else{
                    res.status(201).json({
                        mensagem: 'Produto inserido com sucesso',
                        id: resultado.insertId
                });
            }
        });
    })
    
    
    

});

//retorna produto por ID
router.get('/:ID_Produto',(req, res, next)=>{
    mysql.getConnection((error, conn)=>{
        conn.query('select * from Produto where ID_Produto = ${req.params.ID_Produto;}', (error, results, fields)=>{
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
        mensagem: 'Produto atualizado'
    })
});

//remover produto
router.delete('/', (req, res, next) => {
    res.status(201).json({
        mensagem: 'Produto excluido'
    })
});

module.exports = router