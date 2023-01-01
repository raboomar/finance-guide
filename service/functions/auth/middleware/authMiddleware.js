const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports = function (request, response, next) {
  const token = request.header("x-auth-token");
  if (!token) {
    return response.status(401).send("Authorization denied!!!!");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    request.user = decoded.id;
    // console.log(decoded);
    next();
  } catch (error) {
    return response.status(401).send("Authorization denied!");
  }
};
