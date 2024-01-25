const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../Controllers/userController");

router.post("/signup", async (req, res) => {
  const userCreated = await userController.createUser(
    req.body.name,
    req.body.username,
    req.body.email,
    req.body.password
  );
  if (userCreated) {
    const token = jwt.sign({ userId: userCreated.dataValues.id }, "123", {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    console.log("error");
    res.status(500).json({ error: "Error al intentar crear un usuario" });
  }
});

router.post("/login", async (req, res) => {
  const userFound = await userController.validateUser(
    req.body.email,
    req.body.password
  );
  if (userFound) {
    const token = jwt.sign({ userId: userFound.dataValues.id }, "123", {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas" });
  }
});

module.exports = router;
