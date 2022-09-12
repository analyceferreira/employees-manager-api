const CompanyService = require('../services/companyService')


module.exports = {
    corporate_name: {
        type: "string",
        notEmpty: true,
        isLength: {
            errorMessage: 'Corporate name should be at least 6 chars long',
            options: { min: 6 },
          },
    }, 
    commercial_name: {
        type: "string",
        notEmpty: true,
        isLength: {
            errorMessage: 'Commercial name should be at least 6 chars long',
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
                return CompanyService.showOneByEmail(value).then(user => {
                    if (user.length > 0) {
                        return Promise.reject('Email address already used')
                    }
                })
            }
        },
        errorMessage: "Email cannot be empty"
    },
    cnpj: {
        notEmpty: true,
        trim: true,
        type: "string",
        isLength: {
            errorMessage: 'CNPJ should be length equal to 11',
            options: {
              min: 14,
              max: 14
            }
        },
        errorMessage: "CNPJ cannot be empty"
    },
    phone: {
        optional: true,
    },
    address: {
        optional: true,
    }
}