require('dotenv').config()
const express = require('express')
const cors = require('cors')

const router = require('./routes')
const path = require('path')

// Creando aplicación de express
const app = express()

// Donde cargar archivos estáticos
app.use(express.static('public'))

// Aplicando el cors a la aplicación
app.use(cors())

app.use(express.json())

// Habilitando PUG
app.set('view engine', 'pug')

app.set('views', path.join(__dirname, './views'))

// Definiendo el Router
app.use('/', router())


app.listen(process.env.PORT, () => {
    console.log('====================================');
    console.log('Servidor iniciado en el puerto', process.env.PORT);
    console.log('====================================');
})
