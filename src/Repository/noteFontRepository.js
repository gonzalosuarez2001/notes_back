const noteFontModel = require("../Models/noteFontModel");

async function getFontSettings() {
  try {
    const fontSettings = await noteFontModel.findAll();
    return fontSettings;
  } catch (error) {
    console.error(
      "No se pudieron obtener las fuentes de la base de datos:",
      error
    );
  }
}

async function getNoteFontById(font_id) {
  try {
    const noteFont = await noteFontModel.findOne({
      where: {
        id: font_id,
      },
      attributes: ["font"],
    });
    return noteFont.font;
  } catch (error) {
    console.error("No se pudo obtener la fuente de la nota:", error);
  }
}

module.exports = { getFontSettings, getNoteFontById };
