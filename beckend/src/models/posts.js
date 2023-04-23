'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      posts.belongsTo(models.post_type, {
        foreignKey: 'post_type_id',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      posts.belongsTo(models.category, {
        foreignKey: 'category_id',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      posts.belongsTo(models.sub_category, {
        foreignKey: 'sub_category_id',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      posts.belongsTo(models.type_category, {
        foreignKey: 'type_category_id',
        targetKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      posts.hasMany(models.comments, {
        foreignKey: 'posts_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    }
  };
  posts.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    blog_content: { type: DataTypes.TEXT, allowNull: false },
    youtube_video_link: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
    tags: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING(50), allowNull: false },
    likes: { type: DataTypes.BIGINT, allowNull: false, validate: { isInt: true } },
    views: { type: DataTypes.BIGINT, allowNull: false, validate: { isInt: true }, defaultValue: 0 }
  }, { sequelize, modelName: 'posts' });
  return posts;
};
