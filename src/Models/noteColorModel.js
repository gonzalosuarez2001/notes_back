const sequelize = require("../../config/dbconfig");
const { DataTypes } = require("sequelize");

const NoteColor = sequelize.define(
  "note_color",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "note_color",
    timestamps: false,
  }
);

module.exports = NoteColor;
