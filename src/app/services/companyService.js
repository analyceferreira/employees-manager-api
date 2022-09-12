const models = require('../models')
const CompanyRepository = models.Company


const CompanyService = {

    create: (company)=> {
        return CompanyRepository.create({
            corporate_name: company.corporate_name,
            commercial_name: company.commercial_name,
            email: company.email,
            cnpj: company.cnpj,
            phone: company.phone,
            address: company.address
        })
    },

    showOne: async (id) =>  {
        return CompanyRepository.findByPk(id)
    },

    showAll: async () =>  {
        return CompanyRepository.findAll()
    },

    showOneByEmail: async (email) => {
        const company = await CompanyRepository.findOne({
            where: {
                email : email
            }
        })

        return company != null ? company : false
    },

    update: async (id, companyDataUpdate) => {
        return CompanyRepository.update(companyDataUpdate, {where: { id : id}})
    },

    delete: async (id) => {
        return CompanyRepository.destroy({where: {id: id}})
    }
}



module.exports = CompanyService