const express = require('express')
const server = express()
const routes = require('./routes')
const db = require('./db/database')
const User = require('./models/User')
const port = 8000

async function iniciar() {
    try {
        await db.sync({force: false})
        console.log('database e models sincronizado com sucesso!')
    } catch (error) {
        console.error('Erro ao iniciar:', error)
    }
}

server.listen(
    port,
    () => {
        console.log(`Servidor iniciado em http://localhost:${port}`)
        server.use(routes)
        iniciar()
    }
)