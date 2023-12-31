const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}


Comment.init(
  {
     id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
      autoIncrement: true,
     },
    description: {
      type: DataTypes.STRING,
    },
   
     user_id: {
       type: DataTypes.INTEGER,
       references: {
         model: 'user',
         key: 'id',
       },
     },
     project_id: {
         type: DataTypes.INTEGER,
         references: {
           model: 'project',
           key: 'id',
         },
     }
  },
  {
    sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'user',
  },
);

module.exports = Comment;