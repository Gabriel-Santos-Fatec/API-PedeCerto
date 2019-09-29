import { addProject, editProject, listProjectsMembers, findProject, deleteProject, listProjects } from '../models/ProjectModel';


export function add(req, res) {
    addProject(req.body.theme, req.body.description, req.body.git).then((response) => {
        res.status(200).send ({ message: 'Projeto adicionado com sucesso!', response});
    }).catch((error) => {
        res.status(500).send ({ message: 'Erro ao adicionar projeto!', error});
    });
}

export function edit(req, res) {
    editProject(req.params.id, req.body.name, req.body.description, req.body.git).then((response) => {
        res.status(200).send ({ message: 'Projeto editado com sucesso!'});
    }).catch((error) => {
        res.status(500).send ({ message: 'Erro ao editar projeto', error});
    })
}

export function list(req, res) {
    listProjects().then((response) => {
        res.status(200).send(response);
    }).catch((error) =>{
        res.status(500).send({ message: 'Erro ao listar projetos! ', error})
    })
}

export function listprojectsmembers(req, res) {
    listProjectsMembers().then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Não foi possível listar projetos!', error });
    });
}

export function search(req, res) {
    findProject(req.params.id).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send({ message: 'Não foi possível encontrar projeto!', error});
    });
}

export function del(req, res) {
    deleteProject(req.params.id).then((response) => {
        res.status(200).send({ message: 'Projeto deletado com sucesso! Membros desse projeto deletados com sucesso!'});
    }).catch((error) =>  {
        res.status(500).send({ message: 'Não foi possível deletar projeto!', error});
    });
}