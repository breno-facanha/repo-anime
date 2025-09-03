const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Messages = sequelize.define("Messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id"
    }
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false
}
})

module.exports = Messages;