const router = require('express').Router()
const bcrypt = require('bcrypt')
const models = require('../src/app/models')
const { password } = require('./config/database')
const User = models.User


router.get('/', (req, res) => {

    res.status(200).send()
})

router.post('/user/create', async (req, res) => {
    const {name, email, password, cpf, phone, address, id_company, admin_user} = req.body

    const user = await User.create({
        name,
        email,
        password_hash: bcrypt.hashSync(password, 10),
        cpf,
        phone,
        address,
        id_company,
        admin_user
    })


    console.log(JSON.stringify(user))

    res.status(200).json(JSON.stringify(user))
})



module.exports = router;