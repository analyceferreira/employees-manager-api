'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    id_company: DataTypes.INTEGER,
    admin_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = function(models) {
    User.belongsTo(models.Company, {
      foreignKey: 'id_company',
      as: 'company'
    })
  };

  return User;
};