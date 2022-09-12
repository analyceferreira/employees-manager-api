const router = require('express').Router()
const CompanyController = require('../app/controllers/companyControllers')

const companySchemaValidator  = require('../app/middlewares/CompanySchemaValidator')
const {checkSchema} = require('express-validator');


router.post('/create', checkSchema(companySchemaValidator), CompanyController.create)
router.put('/update/:id', checkSchema(companySchemaValidator), CompanyController.update)
router.delete('/delete/:id', CompanyController.delete)
router.get('/:id', CompanyController.show)
router.get('/', CompanyController.showAll)


module.exports = router