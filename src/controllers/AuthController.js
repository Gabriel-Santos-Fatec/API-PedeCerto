import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AuthModel from '../models/AuthModel';
import config from '../config/config';

/**
 * Esta função é utilizada para realizar o Login dos usuários.
 *
 * Esta função recebe o email e a senha do usuário, procura o e-mail na base de dados,
 * se encontrar compara a hash dos passwords
 * e retorna um Token criptografado com o ID e o nivel de Acesso
 * @param {*} req
 * @param {*} res
 */
class AuthController {
	static Login(req, res) {
		
		Usuarios.findUser(req.body.email).then((response) => {

			if (bcrypt.compareSync(req.body.password, response.password)) {
				const token = JWT.sign({
					id: response.id,
					access: response.level_id,
				}, config.secret, { expiresIn: 60 * 10 });

				res.status(200).send({ auth: true, token });
			} else {
				res.status(401).send({ auth: false, token: null });
			}
		}).catch((error) => {
			res.status(500).send({ message: 'Ocorreu um erro ao realizar o Login.', error });
			console.log(error);
		});
	}
}

export default AuthController;
