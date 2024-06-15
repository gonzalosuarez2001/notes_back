const sequelize = require("../../config/dbconfig");
const { DataTypes } = require("sequelize");

const NoteFont = sequelize.define(
  "note_fonts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    font: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "note_fonts",
    timestamps: false,
  }
);

module.exports = NoteFont;
