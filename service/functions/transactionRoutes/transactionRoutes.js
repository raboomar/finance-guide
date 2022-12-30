const express = require("express");
const transactionService = require("../transactionsService/transactionsService");
const router = express.Router();

router.get("/get", async (request, response) => {
  await transactionService.getAllTransactionsByUserId(request, response);
});
router.get("/category", async (request, response) => {
  await transactionService.getTransactionsByCategory(request, response);
});

router.post("/add", async (request, response) => {
  await transactionService.addTransactionsByUserId(request, response);
});
router.delete("/delete/:id", async (request, response) => {
  await transactionService.deleteTransaction(request, response);
});

module.exports = router;
