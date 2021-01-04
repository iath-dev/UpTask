const { request, response } = require('express');
const Project = require('../models/Project.model');

exports.projectHome = (req = request, res = response) => {
    res.status(200).render('index', {
        page: 'Proyectos'
    })
}

exports.createProject = (req = request, res = response) => {
    res.status(200).render('new_project', {
        page: 'Nuevo Proyecto'
    })
}

exports.newProject = async (req = request, res = response) => {
    const { body: { nombre } } = req

    let errores = [];

    if(!nombre) {
        errores.push({ 'texto': 'Agrega un nombre' })
    }

    if(errores.length > 0) {
        res.render('new_project', {
            page: 'Nuevo Proyecto',
            errores
        })
    } else {
        const project = await Project.create({
            nombre
        })

        res.redirect('/')
    }
}