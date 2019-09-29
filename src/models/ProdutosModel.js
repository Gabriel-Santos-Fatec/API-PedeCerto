import db from '../config/database';


export function addMember (Nome, Valor) {
    const query = `INSERT INTO Produto (Nome, Valor) VALUES ('${Nome}', '${Valor}')`;

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

export function editMember(ID_Produtos, Nome, Valor) {
    const query = `UPDATE Produto SET name='${Nome}', telephone='${Valor}' WHERE ID_Produto = ${ID_Produto}`;

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
    const query = `SELECT * FROM Produto`;

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

export function getMember(ID_Produto) {
    const query = `SELECT * FROM Produto WHERE ID_Produtos =${ID_Produto}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) 
                reject(err);
            else 
                resolve(result);
            
        });
    });
}

export function deleteMember(ID_Produto) {
    const query = `DELETE FROM Produto WHERE ID_Produto =${ID_Produto}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err)
                reject(err);
            else    
                resolve(result);
        });
    });
}
