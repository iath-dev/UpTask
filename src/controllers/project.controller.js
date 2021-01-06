const { request, response } = require('express');
const Project = require('../models/Project.model');

exports.projectHome = async (req = request, res = response) => {
    const projects = await Project.findAll()

    res.status(200).render('index', {
        page: 'Proyectos',
        projects
    })
}

exports.createProject = async (req = request, res = response) => {
    const projects = await Project.findAll()
  
    res.status(200).render('new-project', {
        page: 'Nuevo Proyecto',
        projects
    })
}

exports.newProject = async (req = request, res = response) => {
    const { body: { nombre }, errors } = req

    if(errors.length > 0) {
        res.render('new-project', {
            page: 'Nuevo Proyecto',
            errors
        })
    } else {
        const project = await Project.create({
            nombre
        })

        res.redirect('/')
    }
}

exports.renderProject = async (req = request, res = response) => {
    const { params: { url } } = req

    const [projects, project] = await Promise.all([
        Project.findAll(),
        Project.findOne({
            where: {
                url
            }
        })
    ])

    if (!project) return res.redirect('/')

    res.render('tasks', {
        projects,
        project
    })
}

exports.editProject = async (req = request, res = response) => {
    const { params: { id } } = req

    const [projects, project] = await Promise.all([
        Project.findAll(),
        Project.findOne({
            where: {
                id
            }
        })
    ])

    if(!project) return res.redirect('/')
  
    res.status(200).render('new-project', {
        page: 'Editar Proyecto',
        projects,
        project
    })

}

exports.updateProject = async(req = request, res = response) => {
    const { params: { id }, body: { nombre }, errors } = req

    console.log(id, nombre)

    if(errors.length > 0) {
        res.render('new-project', {
            page: 'Nuevo Proyecto',
            errors
        })
    } else {
        await Project.update(
            { nombre },
            {
                where: {
                    id
                }
            }
        )
        
        res.redirect('/')
    }
}
