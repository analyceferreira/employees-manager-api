const bcrypt = require('bcrypt')
const models = require('../models')
const User = models.User
const UserService = require('../services/userService')
const { validationResult} = require('express-validator');


const UserController = {
    create: async (req, res) => {
        const {name, email, password, cpf, phone, address, id_company, admin_user} = req.body
        const errors = validationResult(req);
    
        
        if (!errors.isEmpty()) {
            return res.status(404).json({
                errors: errors.array()
            });
        }

        const user = {
            name,
            email,
            password,
            cpf,
            phone,
            address,
            id_company,
            admin_user
        }
    
        const isCreated = await UserService.create(user)


        if(!isCreated) {
            res.status(404).json({
                success: false,
                message: 'Registration fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Registration successful',
            user: isCreated
        })
    },

    delete: async (req, res) => {
        const { id } = req.params

        const isDelete = await UserService.delete(id)

        if(!isDelete) {
            res.status(404).json({
                success: false,
                message: 'Delete fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Delete successful'
        })
    },


    update: async (req, res) => {
        const { id } = req.params
        const { name, email, password, cpf, phone, address, id_company, admin_user } = req.body
        const errors = validationResult(req);
    
        
        if (!errors.isEmpty()) {
            return res.status(404).json({
                errors: errors.array()
            });
        }

        const user = {
            name,
            email,
            password,
            cpf,
            phone,
            address,
            id_company,
            admin_user
        }
        const isUserFound = await UserService.showOne(id)
        const isUpdate = await UserService.update(id, user)

        if(!isUserFound || !isUpdate) {
            res.status(404).json({
                success: false,
                message: 'Update fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Update successful',
            user: isUserFound
        })
    },



    showUser: async (req, res) => {
        const { id } = req.params

        const isUserFound = await UserService.showOne(id)

        if(!isUserFound) {
            res.status(404).json({
                success: false,
                message: 'User found fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'User found successful',
            user: isUserFound
        })
    },



    showAll: async (req, res) => {
        const isUsersFound = await UserService.showAll()

        if(!isUsersFound) {
            res.status(404).json({
                success: false,
                message: 'Users found fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Users found successful',
            user: isUsersFound
        })
    },
}

module.exports = UserController