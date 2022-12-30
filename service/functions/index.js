const functions = require("firebase-functions");
const express = require("express");
const app = express();
const transactionRoutes = require("./transactionRoutes/transactionRoutes");
const categoryRoutes = require("./category/categoryRoutes");
const authRoutes = require("./auth/authRoute");
const cors = require("cors");
app.use(cors());

app.use("/transactions", transactionRoutes);
app.use("/category", categoryRoutes);
app.use("/auth", authRoutes);
exports.app = functions.https.onRequest(app);
