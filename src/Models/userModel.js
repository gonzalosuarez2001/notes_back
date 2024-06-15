const sequelize = require("../../config/dbconfig");
const { DataTypes } = require("sequelize");
const userSettingsModel = require("./settingsModel");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

User.addHook("afterCreate", (user, options) => {
  userSettingsModel.create({
    userId: user.id,
    noteColorId: 1,
    noteFontId: 1,
  });
});

module.exports = User;
