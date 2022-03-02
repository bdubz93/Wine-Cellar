const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wine extends Model {}
//id, Bottle Name, Type. price, Age, Description, Image
Wine.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      bottle_Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        alllowNull: false
      },
      age: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      description: {
          type: DataTypes.TEXT,
          alllowNull: true
      },
      image: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Wine'
    }
  );

  module.exports = Wine;