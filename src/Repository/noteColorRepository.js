const noteColorModel = require("../Models/noteColorModel");

async function getColorSettings() {
  try {
    const colorSettings = await noteColorModel.findAll();
    return colorSettings;
  } catch (error) {
    console.error(
      "No se pudieron obtener los colores de la base de datos:",
      error
    );
  }
}

async function getNoteColorById(color_id) {
  try {
    const noteColor = await noteColorModel.findOne({
      where: {
        id: color_id,
      },
      attributes: ["color"],
    });
    return noteColor.color;
  } catch (error) {
    console.error("No se pudo obtener el color de la nota:", error);
  }
}

module.exports = { getColorSettings, getNoteColorById };
