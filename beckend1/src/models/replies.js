'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class replies extends Model {
    static associate(models) {
      replies.belongsTo(models.comments, {
        foreignKey: 'comments_id',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  replies.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    reply: { type: DataTypes.TEXT, allowNull: false }
  }, { sequelize, modelName: 'replies' });
  return replies;
};
