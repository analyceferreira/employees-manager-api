const UserService = require('../../src/app/services/userService')
const fake = require('faker')

const CompanyService = require('../../src/app/services/companyService')
const CompanyFactory = require('../factories/company.factory')




const UserFactory = {
    generate: async () => {
        const companyData = CompanyFactory.generate();
        const company = await CompanyService.create(companyData)

        return user = {
            name: fake.name.findName(),
            email: fake.internet.email(),
            password: null,
            cpf: (fake.mersenne.rand(10000000000, 99999999999).toString()),
            phone: fake.phone.phoneNumber('## 9 ####-####'),
            address: fake.address.streetAddress(true),
            id_company: company.id,
            admin_user: false
        }
    }
}



module.exports = UserFactory
