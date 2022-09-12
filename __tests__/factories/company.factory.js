const CompanyService = require('../../src/app/services/companyService')
const fake = require('faker')

const CompanyFactory = {
    generate: ()=> {
        return {
            corporate_name: fake.company.bs(),
            commercial_name: fake.company.bs(),
            email: fake.internet.email(),
            cnpj: (fake.mersenne.rand(10000000000000, 99999999999999)).toString(),
            phone: fake.phone.phoneNumber('## 9 ####-####'),
            address: fake.address.streetAddress(true),
        }
    }
}



module.exports = CompanyFactory