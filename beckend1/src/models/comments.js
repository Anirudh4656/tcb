'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    static associate(models) {
      comments.belongsTo(models.posts, {
        foreignKey: 'posts_id',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      comments.hasMany(models.replies, {
        foreignKey: 'comments_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  comments.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    comment: { type: DataTypes.TEXT, allowNull: false }
  }, { sequelize, modelName: 'comments' });
  return comments;
};
