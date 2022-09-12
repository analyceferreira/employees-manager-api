const router = require('express').Router()
const UserController = require('../app/controllers/userControllers')

const userSchemaValidator  = require('../app/middlewares/UserSchemaValidator')
const {checkSchema} = require('express-validator');


router.post('/create', checkSchema(userSchemaValidator), UserController.create)
router.put('/update/:id', checkSchema(userSchemaValidator), UserController.update)
router.delete('/delete/:id', UserController.delete)
router.get('/:id', UserController.showUser)
router.get('/', UserController.showAll)


module.exports = router