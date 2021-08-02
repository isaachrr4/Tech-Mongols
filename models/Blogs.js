const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init ({
    id: {
        type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    blog_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    blog_text: {  type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

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
    modelName: 'post'
}
);

module.exports = Blog