'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type_category extends Model {
    static associate(models) {
      type_category.hasMany(models.posts, {
        foreignKey: 'type_category_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  type_category.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    type_category: { type: DataTypes.STRING, allowNull: false }
  }, { sequelize, modelName: 'type_category' });
  return type_category;
};