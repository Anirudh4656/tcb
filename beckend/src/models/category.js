'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {

    static associate(models) {
      category.hasMany(models.posts, {
        foreignKey: 'category_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  category.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    category: { type: DataTypes.STRING, allowNull: false }
  }, { sequelize, modelName: 'category' });
  return category;
};
