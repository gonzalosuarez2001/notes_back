const userRepository = require("../Repository/userRepository");
const jwt = require("jsonwebtoken");
const tokenSign = process.env.JWT;

async function createUser(req, res) {
  if (req.body.username && req.body.email && req.body.password) {
    const userCreated = await userRepository.createUser(
      req.body.username,
      req.body.email,
      req.body.password
    );
    if (userCreated) {
      const token = jwt.sign(
        {
          userId: userCreated.dataValues.id,
          username: userCreated.dataValues.username,
        },
        tokenSign,
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    } else {
      res.status(500).json({ error: "Error al intentar crear un usuario" });
    }
  } else {
    res.status(400).json({ msg: "Incomplete fields." });
  }
}

async function validateUser(req, res) {
  if (req.body.email && req.body.password) {
    const userFound = await userRepository.validateUser(
      req.body.email,
      req.body.password
    );
    if (userFound) {
      const token = jwt.sign(
        {
          userId: userFound.dataValues.id,
          username: userFound.dataValues.username,
        },
        tokenSign,
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    } else {
      res.status(401).json({ msg: "Incorrect credentials." });
    }
  } else {
    res.status(400).json({ msg: "Incomplete fields." });
  }
}

async function getUserInfo(req, res) {
  const userInfo = { userId: req.userId, username: req.username };
  res.send(userInfo);
}

module.exports = { createUser, validateUser, getUserInfo };
