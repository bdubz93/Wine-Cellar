const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }
// id, user_id, wine_id, comment
Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      // wine_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'wine',
      //     key: 'id'
      //   }
      // },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // project_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'project',
      //     key: 'id',
      //   },
      // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;