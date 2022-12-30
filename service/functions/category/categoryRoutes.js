const express = require("express");
const categoryService = require("./sevice/categoryService");

const router = express.Router();

router.get("/get", async (request, response) => {
  await categoryService.fetchCategory(request, response);
});

// router.post("/add", async (request, response) => {
//   await transactionService.addTransactionsByUserId(request, response);
// });

module.exports = router;
