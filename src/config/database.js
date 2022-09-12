const Sequelize = require('sequelize')
require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

// console.log(process.env.NODE_ENV)
// console.log(process.env.DB_USERNAME)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_DATABASE)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_DIALECT)

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
