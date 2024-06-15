const bcrypt = require("bcrypt");
const userModel = require("../Models/userModel");

async function createUser(username, email, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      email,
      password: hashedPassword,
    };
    const userCreated = await userModel.create(newUser);
    return userCreated;
  } catch (error) {
    console.error("No se pudo crear el usuario:", error);
  }
}

async function validateUser(email, password) {
  try {
    const userFound = await userModel.findOne({
      where: {
        email: email,
      },
    });
    if (userFound) {
      const passwordMatch = await bcrypt.compare(
        password,
        userFound.dataValues.password
      );
      if (passwordMatch) {
        return userFound;
      } else {
        return null;
      }
    }
    return null;
  } catch (error) {
    console.error("No se pudo validar al usuario:", error);
  }
}

module.exports = { createUser, validateUser };
