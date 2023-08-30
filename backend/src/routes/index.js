const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/inserir', async (req,res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.error('Erro ao obter a lista de usuários:', error)
        res.status(500).json({error: 'Erro ao obter a lista de usuários'})
    }
})

module.exports = router