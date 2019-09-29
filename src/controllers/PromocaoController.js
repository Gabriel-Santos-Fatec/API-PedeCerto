import { addMember, editMember, listMembers, getMember, getMemberByProjectId, deleteMember, getMembersAndProjects } from '../models/PromocaoModel';

export function add(req, res) {
    addMember(req.body.Nome, req.body.Valor).then((response) => {
        res.status(200).send({ message: 'Promocao adicionado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao adicionar promoção!', error});
    });
}

export function edit(req, res) {
    editMember(req.params.ID_Promocao, req.body.Nome, req.body.Valor).then((response) => {
        res.status(200).send({ message: 'Promoção editado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao editar promoção', error});
    });
}

export function list(req, res) {
    listMembers().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao listar promoção! ', error});
    })
}

export function search(req, res) {
    getMember(req.params.ID_Promocao).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao encontrar promoção!', error});
    })
}

export function del(req, res) {
    deleteMember(req.params.ID_Promocao).then((response) => {
        res.status(200).send({ message: 'Promoção excluido com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao excluir promoção!', error})
    })
}

