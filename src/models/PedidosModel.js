import db from '../config/database';


export function addMember (Total) {
    const query = `INSERT INTO Pedido (Total) VALUES ('${Total}')`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err){ 
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export function editMember(Total) {
    const query = `UPDATE Pedido SET Total='${Total}'`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export function listMembers() {
    const query = `SELECT * FROM Total`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export function ListarPedidosModel() {
    const query = `SELECT * FROM Total`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export function testecon() {
    const query = `SELECT 1`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

export function getMembers(ID_Pedido) {
    const query = `SELECT * FROM Pedido WHERE ID_Pedido =${ID_Pedido}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) 
                reject(err);
            else 
                resolve(result);
            
        });
    });
}

export function deleteMember(ID_Pedido) {
    const query = `DELETE FROM Pedido WHERE ID_Pedido =${ID_Pedido}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err)
                reject(err);
            else    
                resolve(result);
        });
    });
}

