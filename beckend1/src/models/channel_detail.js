'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class channel_detail extends Model {};
  channel_detail.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    subscribers: { type: DataTypes.STRING, allowNull: false },
    total_videos: { type: DataTypes.BIGINT, allowNull: false, validate: { isInt: true } },
    total_views: { type: DataTypes.BIGINT, allowNull: false, validate: { isInt: true } },
    channelLink: { type: DataTypes.STRING, allowNull: false, validate: { isUrl: true } },
  }, { sequelize, modelName: 'channel_detail' });
  return channel_detail;
};
