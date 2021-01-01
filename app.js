require('dotenv').config()
const express = require('express')
const cors = require('cors')

// Creando aplicación de express
const app = express()

// Aplicando el cors a la aplicación
app.use(cors())

// Definiendo ruta del home
app.use('/', (req, res) => {
    res.status(200).send('Hola mundo')
})

app.listen(process.env.PORT, () => {
    console.log('====================================');
    console.log('Servidor iniciado en el puerto', process.env.PORT);
    console.log('====================================');
})
