const Sequelize = require('sequelize')

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
})

module.exports = Project