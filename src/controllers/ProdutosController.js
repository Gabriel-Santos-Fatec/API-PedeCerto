import { addMember, editMember, listMembers, getMember, getMemberByProjectId, deleteMember, getMembersAndProjects } from '../models/ProdutosModel';

export function add(req, res) {
    addMember(req.body.Nome, req.body.Valor).then((response) => {
        res.status(200).send({ message: 'Promocao adicionado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao adicionar promoção!', error});
    });
}

export function edit(req, res) {
    editMember(req.params.ID_Produto, req.body.Nome, req.body.Valor).then((response) => {
        res.status(200).send({ message: 'Produto editado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao editar produto', error});
    });
}

export function list(req, res) {
    listMembers().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao listar Produto! ', error});
    })
}

export function search(req, res) {
    getMember(req.params.ID_Produto).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao encontrar produto!', error});
    })
}

export function del(req, res) {
    deleteMember(req.params.ID_Produto).then((response) => {
        res.status(200).send({ message: 'Produto excluido com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao excluir produto!', error})
    })
}

