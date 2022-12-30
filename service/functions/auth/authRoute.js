const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("./authController");

router.post(
  "/",
  [
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (request, response) => {
    await authController.registerUser(request, response);
  }
);

router.post(
  "/login",
  [
    check("email", "Please provide a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (request, response) => {
    await authController.loginUser(request, response);
  }
);

module.exports = router;
