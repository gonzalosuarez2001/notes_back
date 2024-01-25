const userModel = require("../Models/userModel");

async function createUser(name, username, email, password) {
  try {
    const newUser = {
      name,
      username,
      email,
      password: password,
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
        password: password,
      },
    });
    return userFound;
  } catch (error) {
    console.error("No se pudo crear el usuario:", error);
  }
}

module.exports = { createUser, validateUser };
