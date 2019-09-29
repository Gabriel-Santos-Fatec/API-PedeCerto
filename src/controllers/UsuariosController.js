import { addMember, editMember, listMembers, getMember, getMemberByProjectId, deleteMember, getMembersAndProjects } from '../models/UsuariosModel';

export function add(req, res) {
    addMember(req.body.Nome, req.body.Email, req.body.Senha).then((response) => {
        res.status(200).send({ message: 'Usuarios adicionado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao adicionar membro!', error});
    });
}

export function edit(req, res) {
    editMember(req.params.Nome, req.body.Email, req.body.Senha).then((response) => {
        res.status(200).send({ message: 'Usuario editado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao editar usuario', error});
    });
}

export function list(req, res) {
    listMembers().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao listar usuarios! ', error});
    })
}

export function get(req, res) {
    getMember(req.params.ID_Usuario).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao encontrar usuario!', error});
    })
}

export function del(req, res) {
    deleteMember(req.params.ID_Usuario).then((response) => {
        res.status(200).send({ message: 'Usuario excluido com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao excluir usuario!', error})
    })
}

