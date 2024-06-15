const sequelize = require("../../config/dbconfig");
const { DataTypes } = require("sequelize");

const Settings = sequelize.define(
  "settings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  {
    tableName: "settings",
    timestamps: false,
  }
);

module.exports = Settings;
