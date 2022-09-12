require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const userRouter = require(path.join(__dirname,'/routers/routerUser.js'))
const companyRouter = require(path.join(__dirname,'/routers/routerCompany.js'))



const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json())
app.use(methodOverride('_method'))


app.use('/user', userRouter)
app.use('/company', companyRouter)



module.exports = app