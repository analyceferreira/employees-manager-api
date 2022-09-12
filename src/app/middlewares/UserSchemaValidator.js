const UserService = require('../services/userService')


module.exports = {
    name: {
        type: "string",
        notEmpty: true,
        isLength: {
            errorMessage: 'Name should be at least 6 chars long',
            // Multiple options would be expressed as an array
            options: { min: 6 },
          },
    }, 
    email: {
        notEmpty: true,
        isEmail : true,
        normalizeEmail: true,
        custom: {
            options: value => {
                return UserService.showOneByEmail(value).then(user => {
                    if (user.length > 0) {
                        return Promise.reject('Email address already used')
                    }
                })
            }
        },
        errorMessage: "Email cannot be empty"

    },
    password: {
        optional: true,
    },
    cpf: {
        notEmpty: true,
        trim: true,
        type: "string",
        isLength: {
            errorMessage: 'CPF should be length equal to 11',
            options: {
              min: 11,
              max: 11
            }
        },
        errorMessage: "CPF cannot be empty"
    },
    phone: {
        optional: true,
    },
    address: {
        optional: true,
    },
    id_company: {
        notEmpty: true,
        isInt: true,
        errorMessage: "id_company cannot be empty and need to be a INT"
    },
    admin_user: {
        optional: true,
        isBoolean: true,
    }   
}