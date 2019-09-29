import { addMember, ListarPedidosModel, testecon, editMember, listMembers, getMember, getMemberByProjectId, deleteMember, getMembersAndProjects } from '../models/PedidosModel';

export function add(req, res) {
    addMember(req.body.total).then((response) => {
        res.status(200).send({ message: 'Pedido adicionado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao adicionar pedido!', error});
    });
}
export function teste(req, res) {
    testecon().then((response) => {
        res.status(200).send({ message: 'Teste on!'});
    }).catch((error) => {
        res.status(500).send({ message: 'TEste off!', error});
    });
}

export function ListarPedidos(req, res) {
    ListarPedidosModel().then((response) => {
        res.status(200).send({ message: 'Teste on!'});
    }).catch((error) => {
        res.status(500).send({ message: 'TEste off!', error});
    });
}

export function edit(req, res) {
    editMember(req.params.total).then((response) => {
        res.status(200).send({ message: 'Membro editado com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao editar membro', error});
    });
}

export function list(req, res) {
    listMembers().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao listar membros! ', error});
    })
}

export function del(req, res) {
    deleteMember(req.params.id).then((response) => {
        res.status(200).send({ message: 'Membro excluido com sucesso!'});
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao excluir membro!', error})
    })
}

export function getMembers(req, res) {
    getMembers(req.params.total).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Erro ao encontrar pedidos!', error});
    });
}
