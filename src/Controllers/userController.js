const userRepository = require("../Repository/userRepository");

async function createUser(name, username, email, password) {
    const userCreated = await userRepository.createUser(name, username, email, password)
    return userCreated;
}

async function validateUser(email, password) {
    const userFound = await userRepository.validateUser(email, password)
    return userFound;
}

module.exports = { createUser, validateUser };
