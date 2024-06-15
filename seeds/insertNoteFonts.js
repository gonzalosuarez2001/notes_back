const insertNoteFontsSeed = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "note_fonts",
      [{ font: "Classic" }, { font: "Comfortaa" }, { font: "Inconsolata" }],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("note_fonts", null, {});
  },
};

module.exports = insertNoteFontsSeed;
