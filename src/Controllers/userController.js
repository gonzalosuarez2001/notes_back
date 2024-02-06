const userRepository = require("../Repository/userRepository");
const jwt = require("jsonwebtoken");

async function createUser(req, res) {
  if (
    req.body.name &&
    req.body.username &&
    req.body.email &&
    req.body.password
  ) {
    const userCreated = await userRepository.createUser(
      req.body.name,
      req.body.username,
      req.body.email,
      req.body.password
    );
    if (userCreated) {
      const token = jwt.sign(
        {
          userId: userCreated.dataValues.id,
          userName: userCreated.dataValues.name,
        },
        "123",
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    } else {
      console.log("error");
      res.status(500).json({ error: "Error al intentar crear un usuario" });
    }
  } else {
    console.log("error");
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
          userName: userFound.dataValues.name,
        },
        "123",
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
  const userInfo = { userId: req.userId, userName: req.userName };
  res.send(userInfo);
}

module.exports = { createUser, validateUser, getUserInfo };
