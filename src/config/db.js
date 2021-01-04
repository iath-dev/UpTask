require('dotenv').config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        operatorsAliases: false,
        define: {
            timestamps: false
        },

        logging: console.log,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
)

module.exports = sequelize;
