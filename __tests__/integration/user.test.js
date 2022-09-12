const req = require('supertest')

const app = require('../../src/app')
const CompanyFactory = require('../factories/company.factory')
const UserFactory = require('../factories/user.factory')
const UserService = require('../../src/app/services/userService')
const CompanyService = require('../../src/app/services/companyService')


describe('User integrations', () => {

    it('Should return status 200 and user object on CREATE a user on database', async () => {
        const userData = await UserFactory.generate()

        const response = await req(app)
            .post("/user/create")
            .send(userData);

        expect(response.status).toBe(200);
    });



    it('Should return status 200 on DELETE a user', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)

        const response = await req(app)
            .delete(`/user/delete/${user.id}`)

        expect(response.status).toBe(200);
    });



    it('Should return status 200 and user object on UPDATE a user on database', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)
        const userNewData = await UserFactory.generate()

        const response = await req(app)
            .put(`/user/update/${user.id}`)
            .send(userNewData);

        expect(response.status).toBe(200);
    });




    it('Should return status 200 and user object on GET a user on database', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)

        const response = await req(app)
            .get(`/user/${user.id}`)

        expect(response.status).toBe(200);
    });



    it('Should return status 200 and array of user objects on GET all user on database', async () => {
        await UserFactory.generate()
        await UserFactory.generate()
        await UserFactory.generate()
        await UserFactory.generate()

        const response = await req(app)
            .get(`/user/`)

        expect(response.status).toBe(200);
    });
})