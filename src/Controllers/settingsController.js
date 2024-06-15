const settingsRepository = require("../Repository/settingsRepository");
const noteColorRepository = require("../Repository/noteColorRepository");
const noteFontRepository = require("../Repository/noteFontRepository");

async function getColorSettings(req, res) {
  const colorSettings = await noteColorRepository.getColorSettings();
  const formatedColorSettings = colorSettings.map((color) => {
    return {
      colorId: color.dataValues.id,
      color: color.dataValues.color,
    };
  });
  res.send(formatedColorSettings);
}

async function getFontSettings(req, res) {
  const fontSettings = await noteFontRepository.getFontSettings();
  const formatedFontSettings = fontSettings.map((font) => {
    return {
      fontId: font.dataValues.id,
      font: font.dataValues.font,
    };
  });
  res.send(formatedFontSettings);
}

async function getUserSettings(req, res) {
  const settings = await settingsRepository.getUserSettings(req.userId);

  const formatedSettings = {
    noteColor: await noteColorRepository.getNoteColorById(
      settings.dataValues.noteColorId
    ),
    noteFont: await noteFontRepository.getNoteFontById(
      settings.dataValues.noteFontId
    ),
  };

  res.send(formatedSettings);
}

async function updateUserColor(req, res) {
  await settingsRepository.updateUserColor(req.body.colorId, req.userId);
  res.send({
    msg: `El color de las notas del usuario con id ${req.userId} se actualizo correctamente.`,
  });
}

async function updateUserFont(req, res) {
  await settingsRepository.updateUserFont(req.body.fontId, req.userId);
  res.send({
    msg: `La fuente de las notas del usuario con id ${req.userId} se actualizo correctamente.`,
  });
}

module.exports = {
  getColorSettings,
  getFontSettings,
  getUserSettings,
  updateUserColor,
  updateUserFont,
};
