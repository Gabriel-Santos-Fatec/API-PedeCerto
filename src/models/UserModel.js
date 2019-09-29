import db from '../config/database';

/**
 * Esta função utiliza o ID para buscar os dados do usuário no sistema e retorna os dados caso encontre.
 * 
 * @param {Integer} id
 */
export function findUser(id) {
    const query = `SELECT * FROM user WHERE id = '${id}'`;

    return new Promise( (resolve, reject) => {
        db.query(query, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}


/**
 * Esta função busca todos os usuários cadastrados na base de dados.
 * 
 * @param {Function} callback 
 */
export function listUsers(callback) {
    const query = 'SELECT id, name, email, password, level_id FROM user ORDER BY name';

    return new Promise( (resolve, reject) => {
        db.query(query, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}


export function addUser(name, email, password) {
    const query = `INSERT INTO user (name, email, password, level_id) VALUES ('${name}', '${email}', '${password}', 3)`;

    return new Promise( (resolve, reject) => {
        db.query(query, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}


/**
 * Esta função altera os dados de um usuario de acordo com o ID.
 * 
 * @param {Integer} id 
 * @param {String} name 
 * @param {String} user_access
 * @param {String} email
 * @param {String} password 
 */
export function editUser(id, name, email, password) {
    const query = `UPDATE user SET name = '${name}', email = '${email}', password = '${password}' WHERE id = ${id}`;

    return new Promise( (resolve, reject) => {
        db.query(query, (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
}

export function deleteUser(id) {
    const query = `DELETE FROM user WHERE id = ${id}`;

    return new Promise ( (resolve, reject) => {
        db.query(query, (err, result) => {
            if(err) 
                reject(err);
            else    
                resolve(result);
        });
    });
}