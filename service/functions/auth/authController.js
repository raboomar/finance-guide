const { validationResult } = require("express-validator");
const pool = require("../datebase/databaeConfig");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const registerUser = async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = request.body;
    let DB = pool.pool;
    let [results] = await DB.query("select * from user where username = ?", [
      email,
    ]);
    if (results.length !== 0) {
      return response
        .status(400)
        .json({ errors: [{ msg: "User already exists" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const dbPassword = await bcrypt.hash(password, salt);
    await DB.query(`insert into user(username,password) values (?, ?)`, [
      email,
      dbPassword,
    ]);
    let [id] = await DB.query("select id from user where username = ?", [
      email,
    ]);

    let userId = id[0].id;
    jwt.sign(
      { id: userId },
      process.env.JWTSECRET,
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        response.json({ token });
      }
    );
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

const loginUser = async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = request.body;
    let DB = pool.pool;
    let [results] = await DB.query("select * from user where username = ?", [
      email,
    ]);
    if (results.length === 0) {
      return response
        .status(400)
        .json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, results[0].password);

    if (!isMatch) {
      return response.status(401).send("Invalid credentials");
    }

    jwt.sign(
      { id: results[0].id },
      process.env.JWTSECRET,
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        response.json({ token });
      }
    );
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

const authController = { registerUser, loginUser };

module.exports = authController;
