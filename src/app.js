require('dotenv').config()
const express = require('express')
const cors = require('cors')

const router = require('./routes')
const path = require('path')

const bodyParser = require('body-parser')

const db = require('./config/db');
const { vardump } = require('./helpers');

require('./models/Project.model')

db.sync()
    .then(() => console.log('Conectado a la Base de datos'))
    .catch(console.log)

// Creando aplicación de express
const app = express()

// Configurar donde cargar archivos estáticos
app.use(express.static('public'))

// Aplicando el cors a la aplicación
app.use(cors())

// Habilitando PUG
app.set('view engine', 'pug')

// Habilitar body-parser para leer datos del formulario
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './views'))

// Pasar vardump a la aplicación
app.use((req, res, next) => {
    res.locals.vardump = vardump

    next()
})

// Definiendo el Router
app.use('/', router())


app.listen(process.env.PORT, () => {
    console.log('====================================');
    console.log('Servidor iniciado en el puerto', process.env.PORT);
    console.log('====================================');
})
