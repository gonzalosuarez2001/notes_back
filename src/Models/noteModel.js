const sequelize = require("../../config/dbconfig");
const { DataTypes } = require("sequelize");

const Note = sequelize.define(
  "notes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  },
  {
    tableName: "notes",
    timestamps: false,
  }
);

module.exports = Note;
