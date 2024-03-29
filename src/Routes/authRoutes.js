const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../Controllers/userController");

router.post("/signup", userController.createUser);

router.post("/login", userController.validateUser);

module.exports = router;
