const models = require('../../src/app/models')
const User = models.User

describe('Authetication', () => {
    it('Should be authenticated to access the route ', async () => {
    const user = await User.create({
        name: 'Diego',
        email: 'diego@mail.com',
        password_hash: '12345',
        cpf: '04444444448',
        phone: '66984115450',
        address: 'Rua das Ruas, 15 - centro',
        id_company: null,
        admin_user: true
    })

    console.log(user)

    expect(user.email).toBe('diego@mail.com')
    })
})