const sequelize = require("../../config/dbconfig");
const { DataTypes } = require("sequelize");
const userModel = require("./userModel");
const noteColorModel = require("./noteColorModel");

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
      type: DataTypes.STRING,
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

Note.belongsTo(userModel, { foreignKey: "user_id" });
Note.belongsTo(noteColorModel, { foreignKey: "color_id" });

module.exports = Note;
