const truncate = require("../utils/truncate");
const CompanyFactory = require('../factories/company.factory')
const CompanyService = require('../../src/app/services/companyService')



describe('Company', () => {

    beforeEach(async () => {
        await truncate();
    });

    
    
    it('Should CREATE a company on database', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)

        expect(company).toHaveProperty('id');
    });




    it('Should SHOW ONE company on database', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)

        const companyFound = await CompanyService.showOne(company.id)
        expect(companyFound.id).toBe(company.id);
    });




    it('Should SHOW MANY companys on database', async () => {
        const quant = 5
        const companies = []

        for (let i = 0; i < quant; i++ )  {
            const companyData = await CompanyFactory.generate()
            await companies.push(
                await CompanyService.create(companyData)
            )
        }

        const allcompanys = await CompanyService.showAll()
        expect(allcompanys.length).toBe(quant);
    });



    
    it('Should UPDATE a company on database', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)

        company.name = 'New test name'
        const companyDataUpdate = company.toJSON()
        const hasUpdate = await CompanyService.update(company.id, companyDataUpdate)
        expect(hasUpdate[0]).toBe(1);
    });




    it('Should DELETE a company on database', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)
    
        const hasDeleted = await CompanyService.delete(company.id)
        expect(hasDeleted).toBe(1);
    });
})