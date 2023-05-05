'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_category extends Model {
    static associate(models) {
      sub_category.hasMany(models.posts, {
        foreignKey: 'sub_category_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  sub_category.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    sub_category: { type: DataTypes.STRING, allowNull: false }
  }, { sequelize, modelName: 'sub_category' });
  return sub_category;
};
