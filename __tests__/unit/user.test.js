const truncate = require("../utils/truncate");
const UserFactory = require('../factories/user.factory')
const UserService = require('../../src/app/services/userService')



describe('User Unit', () => {

    beforeEach(async () => {
        await truncate();
    });

    
    it('Should CREATE a user on database', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)

        expect(user).toHaveProperty('id');
    });




    it('Should SHOW ONE user on database', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)

        const userFound = await UserService.showOne(user.id)
        expect(userFound.id).toBe(user.id);
    });




    it('Should SHOW MANY users on database', async () => {
        const quant = 5
        const users = []

        for (let i = 0; i < quant; i++ )  {
            const userData = await UserFactory.generate()
            await users.push(
                await UserService.create(userData)
            )
        }

        const allUsers = await UserService.showAll()
        expect(allUsers.length).toBe(quant);
    });



    
    it('Should UPDATE a user on database', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)

        user.name = 'New test name'
        const userDataUpdate = user.toJSON()
        const hasUpdate = await UserService.update(user.id, userDataUpdate)
        expect(hasUpdate[0]).toBe(1);
    });




    it('Should DELETE a user on database', async () => {
        const userData = await UserFactory.generate()
        const user = await UserService.create(userData)
    
        const hasDeleted = await UserService.delete(user.id)
        expect(hasDeleted).toBe(1);
    });
})