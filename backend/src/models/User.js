const Sequelize = require('sequelize')
const db = require('../db/database')

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// User.create({
//     name: 'Jhon'
// })

module.exports = User