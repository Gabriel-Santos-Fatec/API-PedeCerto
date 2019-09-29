import db from '../config/database';


export function addMember (Nome, Valor) {
    const query = `INSERT INTO Promocao (Nome, Valor) VALUES ('${Nome}', '${Valor}')`;

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

export function editMember(ID_Promocao, Nome, Valor) {
    const query = `UPDATE Promocao SET Nome='${Nome}', Valor='${Valor}' WHERE ID_Promocao = ${ID_Promocao}`;

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
    const query = `SELECT * FROM Promocao`;

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

export function getMember(ID_Promocao) {
    const query = `SELECT * FROM Promocao WHERE ID_Promocao =${ID_Promocao}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) 
                reject(err);
            else 
                resolve(result);
            
        });
    });
}

export function deleteMember(ID_Promocao) {
    const query = `DELETE FROM Promocao WHERE ID_Promocao =${ID_Promocao}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err)
                reject(err);
            else    
                resolve(result);
        });
    });
}
