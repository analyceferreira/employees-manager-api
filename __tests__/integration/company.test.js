const req = require('supertest')

const app = require('../../src/app')
const CompanyFactory = require('../factories/company.factory')
const CompanyService = require('../../src/app/services/companyService')


describe('Company integrations', () => {

    it('Should return status 200 and company object on CREATE a company on database', async () => {
        const companyData = await CompanyFactory.generate()

        const response = await req(app)
            .post("/company/create")
            .send(companyData);

        expect(response.status).toBe(200);
    });



    it('Should return status 200 on DELETE a company', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)

        const response = await req(app)
            .delete(`/company/delete/${company.id}`)

        expect(response.status).toBe(200);
    });



    it('Should return status 200 and company object on UPDATE a company on database', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)
        const companyNewData = await CompanyFactory.generate()

        const response = await req(app)
            .put(`/company/update/${company.id}`)
            .send(companyNewData);

        expect(response.status).toBe(200);
    });




    it('Should return status 200 and company object on GET a company on database', async () => {
        const companyData = await CompanyFactory.generate()
        const company = await CompanyService.create(companyData)

        const response = await req(app)
            .get(`/company/${company.id}`)

        expect(response.status).toBe(200);
    });



    it('Should return status 200 and array of company objects on GET ALL company on database', async () => {
        await CompanyFactory.generate()
        await CompanyFactory.generate()
        await CompanyFactory.generate()
        await CompanyFactory.generate()

        const response = await req(app)
            .get(`/company/`)

        expect(response.status).toBe(200);
    });
})