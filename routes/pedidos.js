const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//get= consulta/retorna todos produtos
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        conn.query('select * from Pedido;', (error, results, fields)=>{
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
           `insert into Pedido (Total) values (?);`, 
            [req.body.Total],
            (error, results, fields) => {
                conn.release();

                if(error) {
                    res.status(500).json({
                        error: error,
                       response: null
                    })
                }else{
                    res.status(201).json({
                        mensagem: 'Pedido inserido com sucesso',
                        id: resultado.insertId
                });
            }
        });
    })
    
    
    

});

//retorna produto por ID
router.get('/:ID_Pedido',(req, res, next)=>{
    mysql.getConnection((error, conn)=>{
        conn.query('select * from Pedido where ID_Pedido = ${req.params.ID_Pedido;}', (error, results, fields)=>{
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
        mensagem: 'Pedido atualizado'
    })
});

//remover produto
router.delete('/', (req, res, next) => {
    res.status(201).json({
        mensagem: 'Pedido excluido'
    })
});

module.exports = router