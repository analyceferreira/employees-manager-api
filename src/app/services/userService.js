const models = require('../models')
const UserRepository = models.User
const bcrypt = require('bcrypt')
const { password } = require('../../config/database')



const UserService = {

    create: async (user) => {

        const password_hash = password != null ? bcrypt.hashSync(user.password, 10) : null
        const admin_user = password === true ? admin_user : false

        const userCreate = await UserRepository.create({
            name: user.name,
            email: user.email,
            password_hash: password_hash,
            cpf: user.cpf,
            phone: user.phone,
            address: user.address,
            id_company: user.id_company,
            admin_user: user.admin_user
        })

        return userCreate
    },

    showOne: async (id) =>  {
        return UserRepository.findByPk(id)
    },

    showOneByEmail: async (email) => {
        const user = await UserRepository.findOne({
            where: {
                email : email
            }
        })

        return user != null ? user : false
    },

    showAll: async () =>  {
        return UserRepository.findAll()
    },

    update: async (id, userDataUpdate) => {
        return UserRepository.update(userDataUpdate, {where: { id : id}})
    },

    delete: async (id) => {
        return UserRepository.destroy({where: {id: id}})
    }
}



module.exports = UserService