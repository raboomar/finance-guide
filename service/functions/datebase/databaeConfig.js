const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const pool = mysql
  .createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
  })
  .promise();

module.exports = { pool };
