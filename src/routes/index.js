const { Router } = require('express')

const router = Router()

// Controladores
const projectController = require('../controllers/project.controller')

module.exports = function () {
    // Definiendo ruta del home
    router.get('/', projectController.projectHome)

    router.get('/new-project', projectController.createProject)

    router.post('/new-project', projectController.newProject)

    return router;
}
