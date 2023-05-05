'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_type extends Model {
    static associate(models) {
      post_type.hasMany(models.posts, {
        foreignKey: 'post_type_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  post_type.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    type: { type: DataTypes.STRING, allowNull: false }
  }, { sequelize, modelName: 'post_type' });
  return post_type;
};
