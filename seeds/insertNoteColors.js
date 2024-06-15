const insertNoteColorsSeed = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "note_colors",
      [{ color: "#262a2e" }, { color: "#2a3b3b" }, { color: "#2a2b3b" }],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("note_colors", null, {});
  },
};

module.exports = insertNoteColorsSeed;
