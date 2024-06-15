const userModel = require("../src/Models/userModel");
const noteModel = require("../src/Models/noteModel");
const noteFontModel = require("../src/Models/noteFontModel");
const noteColorModel = require("../src/Models/noteColorModel");
const settingsModel = require("../src/Models/settingsModel");

function relateModels() {
  userModel.hasMany(noteModel);
  userModel.hasOne(settingsModel);
  noteColorModel.hasMany(settingsModel);
  noteFontModel.hasMany(settingsModel);
  settingsModel.belongsTo(userModel);
  settingsModel.belongsTo(noteFontModel);
  settingsModel.belongsTo(noteColorModel);
  noteModel.belongsTo(userModel);
}

module.exports = relateModels;
