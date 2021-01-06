const { Router } = require('express');
const { check } = require('express-validator');

const router = Router()

// Controladores
const projectController = require('../controllers/project.controller');
const fieldValidator = require('../middlewares/fieldValidator');

module.exports = function () {
    // Definiendo ruta del home
    router.get('/', projectController.projectHome)

    router.get('/new-project', projectController.createProject)

    router.post(
        '/new-project',
        [
            check('nombre', 'El nombre no es valido').trim().not().isEmpty().escape(),
            fieldValidator,
        ],
        projectController.newProject
    )

    router.get('/projects/:url',projectController.renderProject)

    router.get('/project/edit/:id', projectController.editProject)

    router.post(
        '/project/edit/:id',
        [
            check('nombre', 'El nombre no es valido').trim().not().isEmpty().escape(),
            fieldValidator,
        ],
        projectController.updateProject
    )

    return router;
}
