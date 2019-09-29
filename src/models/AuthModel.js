import db from '../config/database';

/**
 * Essa Classe busca os dados do usuário para realizar a autenticação.
 */
class AuthModel {
  static findUser(email) {
    const query = `SELECT * FROM SuperUser WHERE email = '${email}'`;

    return new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]);
        }
      });
    });
  }
}

export default AuthModel;
