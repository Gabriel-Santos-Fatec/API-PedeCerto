import { addUser,  editUser, findUser, listUsers, deleteUser } from '../models/UserModel';
import bcrypt from 'bcryptjs';

/**
 * Esta função é utilizada para adicionar um novo usuário ao sistema.
 * 
 * Esta função recebe os dados necessários para criar um novo usuário no sistema,
 * e retorna se o usuário foi adicionado ou não.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function add(req, res) {
    addUser(req.body.name, req.body.email, bcrypt.hashSync(req.body.password), 1).then( (response) => {
        res.status(200).send({ message: 'Usuário criado com sucesso!' });
    }).catch( (error) => {
        res.status(500).send({ message: 'Houve um erro ao adicionar o usuário.', error });
    });
}


/**
 * Esta função é utilizada para editar um usuário ao sistema.
 * 
 * Esta função recebe os dados que serão alterados no registro do usuário.
 * 
 * @param {*} req 
 * @param {*} res
 */
export function edit(req, res) {
    editUser(req.params.id, req.body.name, req.body.email, bcrypt.hashSync(req.body.password)).then( (response) => {
        res.status(200).send({ message: 'Usuário editado com sucesso! '});
    }).catch( (error) => {
        res.status(500).send({ message: 'Ocorreu um erro ao editar o usuário', error});
    });
}


/**
 * Esta função é utilizada para buscar um usuário do sistema.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function search(req, res) {
    findUser(req.params.id).then( (response) => {
        res.status(200).send(response);
    }).catch( (error) => {
        res.status(404).send({ message: 'Usuário não encontrado!', error });
    });
}


/**
 * Esta função é utilizada para buscar todos os usuários do sistema.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function list(req, res) {
    listUsers().then( (response) => {
        res.status(200).send(response);
    }).catch( (error) => {
        res.status(500).send({ message: 'Não foi possível buscar os usuários.', error });
    });
}

export function del(req, res) {
    deleteUser(req.params.id).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Não foi possível deletar usuario', error });
    });
}