const  router = require('express').Router()
const models = require('../src/app/models')
const User = models.User

User.create({
    name: 'Diego',
    email: 'diego@mail.com',
    password_hash: '12345',
    cpf: '04444444448',
    phone: '66984115450',
    address: 'Rua das Ruas, 15 - centro',
    id_company: null,
    admin_user: true
})

module.exports = router;