import db from '../config/database';
import { from, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export function getMemberByProjectId(project_id){
    const query = `SELECT * FROM member WHERE project_id =${project_id}`;

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


export function addProject(name, description, git) {
	const query = `INSERT INTO project (name, description, link) VALUES ('${name}','${description}', '${git}' )`;

	return new Promise ((resolve, reject) => {

		db.query(query, (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

export function editProject(id, name, description, git) {
	const query = `UPDATE project SET name = '${name}', description = '${description}', link = '${git}' WHERE id = ${id}`;

	return new Promise ((resolve, reject) => {

		db.query(query, (err, result) => {
			if(err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
} 

export function listProjectsMembers() {
	const query = `SELECT * FROM project ORDER BY name`;

	return new Promise ((resolve, reject) => {

		db.query(query, (err, result) => {
			if(err) {
				reject(err);
				return
			} 
			const projectMap = result
				.reduce( (acc, it) => Object.assign(acc, {[it.id] : it}) , {} );
			console.log(projectMap);
			const queries = Object.keys(projectMap)
				.map( id => from(getMemberByProjectId(id)).pipe(
					map( members => ({ id: id, members: members}))
				))
			forkJoin(...queries).subscribe((partialProject) => {
				partialProject.forEach( project => {
					console.log(">>>>>",project);
					projectMap[project.id]['members'] = project.members;
				})
				resolve(result);
			})	
		});
	});
}

export function listProjects() {
	const query = 'SELECT * FROM project ORDER BY name';

	return new Promise ((resolve, reject) => {
		db.query(query, (err, result) => {
			if(err)
				reject(err)
			else
				resolve(result)
		});
	});
}

/**
 * Esta função utiliza o ID para buscar os dados do projeto e retornar os dados caso encontre
 * 
 * @param {Integer} id
 */
export function findProject(id) {
	const query = `SELECT * FROM project WHERE id = ${id}`;

	return new Promise ((resolve, reject) => {

		db.query(query, (err, result) => {
			if(err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

export function deleteProject(id) {
	const query = `DELETE FROM project WHERE id = ${id}`;
	
	return new Promise ((resolve, reject) => {

		db.query(query, (err, result) => {
			if(err)
				reject(err);
			else	
				resolve(result);
		});
	});
}