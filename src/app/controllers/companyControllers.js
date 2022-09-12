const CompanyService = require('../services/companyService')
const { validationResult} = require('express-validator');


const CompanyController = {
    create: async (req, res) => {
        const {corporate_name, commercial_name, email, cnpj, phone, address} = req.body
        const errors = validationResult(req);
    
        
        if (!errors.isEmpty()) {
            return res.status(404).json({
                errors: errors.array()
            });
        }

        const company = {
            corporate_name,
            commercial_name,
            email,
            cnpj,
            phone,
            address
        }

        console.log(company)
    
        const isCreated = await CompanyService.create(company)

        if(!isCreated) {
            res.status(404).json({
                success: false,
                message: 'Registration fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Registration successful',
            company: isCreated
        })
    },

    delete: async (req, res) => {
        const { id } = req.params

        const isDelete = await CompanyService.delete(id)

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
        const {corporate_name, commercial_name, email, cnpj, phone, address} = req.body
        const errors = validationResult(req);
    
        
        if (!errors.isEmpty()) {
            return res.status(404).json({
                errors: errors.array()
            });
        }

        const company = {
            corporate_name,
            commercial_name,
            email,
            cnpj,
            phone,
            address
        }
    
        const isUpdate = await CompanyService.update(id, company)

        if(!isUpdate) {
            res.status(404).json({
                success: false,
                message: 'Update fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Update successful'
        })
    },



    show: async (req, res) => {
        const { id } = req.params

        const isCompanyFound = await CompanyService.showOne(id)

        if(!isCompanyFound) {
            res.status(404).json({
                success: false,
                message: 'Company found fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Company found successful',
            company: isCompanyFound
        })
    },



    showAll: async (req, res) => {
        const isCompaniesFound = await CompanyService.showAll()

        if(!isCompaniesFound) {
            res.status(404).json({
                success: false,
                message: 'Companies found fail'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Companies found successful',
            company: isCompaniesFound
        })
    },
}

module.exports = CompanyController