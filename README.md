<div align="center">

# EMPLOYEES MANAGER API

API RESTful to manager companys and employees

[![made in brazil](https://img.shields.io/badge/state%20-bulding-009.svg?style=for-the-badge)]() [![made in brazil](https://img.shields.io/badge/made%20in-brazil-008751.svg?style=for-the-badge)](https://www.google.com/maps/place/brazil)

</div>


<br>
<br>

# About the code

## Techs
- Node.JS
- Express
- Sequelize ORM
- Jest and Supertest to tests
- Postgres database to production and SQLite database to tests

## Architecture and patterns:
- RESTful
- Architecture MSC (model, service, controller)
- Buildind using TDD
- Units tests 
- Integrations tests

<br>


# Running the app
```bash
# clone repository
$ git clone https://github.com/analyceferreira/ecommerce-pi.git

# install dependes
$ npm install

# run app
$ npm star
```
<br>

# Documentation

## Company
###  Create a new Company

Route:  ``` /company/crate``` <br>
Method:  ``` POST ``` <br>
Body content:
```bash
{
    "corporate_name": "Company corporate",
    "commercial_name": "Company e-services", 
    "email": "mail@mail.com",
    "cnpj": "64608155886833",
    "phone": "48939321499",
    "address": "05026 Chet Lodge Apt. 725"
}
```
Return: 
``` bash
{
    "success": true,
    "message": "Registration successful",
    "company": {
        "id": 1,
        "corporate_name": "Company corporate",
        "commercial_name": "Company e-services",
        "email": "mail@mail.com",
        "cnpj": "64608155886833",
        "phone": "48939321499",
        "address": "05026 Chet Lodge Apt. 725",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    }
}
```

<br>

<br>

###  Show a Company

Route:  ``` /company/id``` <br>
Method:  ``` GET ``` <br>
No body content

Return: 
``` bash
{
    "success": true,
    "message": "Company found successful",
    "company": {
        "id": 1,
        "corporate_name": "Company corporate",
        "commercial_name": "Company e-services",
        "email": "mail@mail.com",
        "cnpj": "64608155886833",
        "phone": "48939321499",
        "address": "05026 Chet Lodge Apt. 725",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    }
}
```
<br>

###  Show all Companies

Route:  ``` /company/``` <br>
Method:  ``` GET ``` <br>
No body content

Return: 
``` bash
{
    "success": true,
    "message": "Companies found successful",
    "companies": [{
        "id": 1,
        "corporate_name": "Company corporate",
        "commercial_name": "Company e-services",
        "email": "mail@mail.com",
        "cnpj": "64608155886833",
        "phone": "48939321499",
        "address": "05026 Chet Lodge Apt. 725",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    },
    {
        "id": 2,
        "corporate_name": "Company corporate 2",
        "commercial_name": "Company e-services 2",
        "email": "othermail@mail.com",
        "cnpj": "11111155886833",
        "phone": "55539321499",
        "address": "06755 Other Lodge Apt. 24",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    }]
}
```
<br>

###  Update a Company

Route:  ``` /company/update/id?_method=PUT``` <br>
Method:  ``` POST ``` <br>
Body content:
```bash
{
    "corporate_name": "Company corporate",
    "commercial_name": "Company e-services", 
    "email": "mail@mail.com",
    "cnpj": "64608155886833",
    "phone": "48939321499",
    "address": "05026 Chet Lodge Apt. 725"
}
```
Return: 
``` bash
{
    "success": true,
    "message": "Update company successful"
}
```

<br>

###  Delete a Company

Route:  ``` /company/update/id?_method=DELETE``` <br>
Method:  ``` GET ``` <br>
No body content

Return: 
``` bash
{
    "success": true,
    "message": "Delete company successful"
}
```
<br>
<br>

## User
###  Create a new User

Route:  ``` /user/crate``` <br>
Method:  ``` POST ``` <br>
Body content:
```bash
{
    "name": "Joe Doe Lake",
    "email": "mailjoe@mail.com",
    "cpf": "994578429999",
    "phone": "66999999999",
    "address": "3 street, 5547 - New York",
    "id_company": "1",
}
```
<br>

###  Show a User

Route:  ``` /user/id``` <br>
Method:  ``` GET ``` <br>
No body content

Return: 
``` bash
{
    "success": true,
    "message": "User found successful",
    "user": {
        "id": 1,
        "name": "Joe Doe Lake",
        "email": "mailjoe@mail.com",
        "cpf": "994578429999",
        "phone": "66999999999",
        "address": "3 street, 5547 - New York",
        "id_company": "1",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    }
}
```

<br>

###  Show all Users

Route:  ``` /user/``` <br>
Method:  ``` GET ``` <br>
No body content

Return: 
``` bash
{
    "success": true,
    "message": "Users found successful",
    "users": [{
        "id": 1,
        "name": "Joe Doe Lake",
        "email": "mailjoe@mail.com",
        "cpf": "994578429999",
        "phone": "66999999999",
        "address": "3 street, 5547 - New York",
        "id_company": "1",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    },
    {
        "id": 12
        "name": "Mary Doe Lake",
        "email": "mailmary@mail.com",
        "cpf": "778578429999",
        "phone": "66999888999",
        "address": "lupery 5, 10 - New York",
        "id_company": "5",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    }]
}
```
<br>

###  Update a User

Route:  ``` /user/update/id?_method=PUT``` <br>
Method:  ``` POST ``` <br>
Body content:
```bash
{
    "name": "Joe Doe Lake",
    "email": "newmailjoe@mail.com",
    "cpf": "994578429888",
    "phone": "66999999999",
    "address": "10 street, 5547 - New York",
    "id_company": "10"
}
```
Return: 
``` bash
{
    "success": true,
    "message": "Update user successful",
    "user": {
        "id": 1,
        "name": "Joe Doe Lake",
        "email": "newmailjoe@mail.com",
        "cpf": "994578429888",
        "phone": "66999999999",
        "address": "10 street, 5547 - New York",
        "id_company": "10",
        "updatedAt": "2022-09-12T18:46:37.845Z",
        "createdAt": "2022-09-12T18:46:37.845Z"
    }
}
```
<br>

###  Delete a User

Route:  ``` /user/update/id?_method=DELETE``` <br>
Method:  ``` GET ``` <br>
No body content

Return: 
``` bash
{
    "success": true,
    "message": "Delete user successful"
}
```
<br>
<br>

# Database config
- Rename .env.exemple file to .env and insert your production database informations
- Rename .env.test.exemple file to .env.test and insert your test database informations

[Clicking here](https://lucid.app/lucidchart/e8d1aeae-0514-45c4-9865-dd60e40be463/edit?page=0_0#
) for to see database schema .



 

