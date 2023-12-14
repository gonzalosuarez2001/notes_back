const express = require('express');
const router = express.Router();
const noteController = require("../controllers/notesController");

router.get('/', async (req, res) => {
  try {
    const notes = await noteController.getNotes();
    res.send(notes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las notas" });
  }
});

module.exports = router;
