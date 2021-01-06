const Sequelize = require('sequelize');
const shortid = require('shortid');
const slug = require('slug');

const db = require('../config/db');

const Project = db.define('Project', {
    id: {
        type: Sequelize.INTEGER,
        // unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING(64),
    url: Sequelize.STRING
}, {
    hooks: {
        beforeCreate(project) {
            const url = slug(project.nombre).toLowerCase().concat('-', shortid.generate())
            console.log(url)

            project.url = url
        }
    }
})

module.exports = Project