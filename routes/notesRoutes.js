const express = require('express');
const router = express.Router();
const noteController = require("../controllers/notesController");

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    //const notes = await noteController.getNotes(user_id);
    res.send({ok: "ok"});
  } catch (error) {
    res.status(500).json({ error: "Error al guardar nota" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user_id = req.params.id;
    const notes = await noteController.getNotes(user_id);
    res.send(notes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las notas" });
  }
});

module.exports = router;
