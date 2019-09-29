import db from '../config/database';


export function addMember (Nome, Email, Senha) {
    const query = `INSERT INTO Usuario (Nome, Email, Senha) VALUES ('${Nome}', '${Email}', '${Senha}')`;

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

export function editMember(ID_Usuario, Nome, Email, Senha) {
    const query = `UPDATE Usuario SET Nome='${Nome}', Email='${Email}', Senha='${Senha}' WHERE ID_Usuario = ${ID_Usuario}`;

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
    const query = `SELECT * FROM Usuario`;

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

export function getMember(ID_Usuario) {
    const query = `SELECT * FROM member WHERE ID_Usuario =${ID_Usuario}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) 
                reject(err);
            else 
                resolve(result);
            
        });
    });
}

export function deleteMember(id) {
    const query = `DELETE FROM Usuario WHERE ID_Usuario =${ID_Usuario}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err)
                reject(err);
            else    
                resolve(result);
        });
    });
}

export function getMembers(ID_Usuario){
    const query = `SELECT * FROM Usuario WHERE ID_Usuario =${ID_Usuario}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
