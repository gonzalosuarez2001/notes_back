const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

router.get("/:id", async (req, res) => {
  try {
    const user_id = req.params.id;  
    const notes = await notesController.getNotes(user_id);
    console.log("usuario " + user_id);
    res.send(notes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las notas" });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const user_id = req.params.id;
    const content = req.body.content;
    const response = await notesController.addNote(user_id, content);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar nota" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const note_id = req.body.id;
    const response = await notesController.deleteNote(note_id);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar nota" });
  }
});

module.exports = router;
