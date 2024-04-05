const bcrypt = require('bcrypt');
const { generateToken } = require("../config/jwtProvider");
const { createUser, getUserByEmail } = require("../service/userService");

const register = async (req, res) => {
  try {
    const user = await createUser(req.body);
    const jwt = generateToken(user._id);
    //await createCart(user);
    return res.status(201).send({ jwt, message: "registration successful", user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "invalid password" });
    }
    const jwt = generateToken(user._id);
    return res.status(200).send({ jwt, message: "login successful", user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { register, login };
