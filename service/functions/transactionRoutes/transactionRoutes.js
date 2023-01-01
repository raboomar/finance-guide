const express = require("express");
const transactionService = require("../transactionsService/transactionsService");
const router = express.Router();
const authMiddleware = require("../auth/middleware/authMiddleware");
router.get("/get", authMiddleware, async (request, response) => {
  await transactionService.getAllTransactionsByUserId(request, response);
});
router.get("/category", authMiddleware, async (request, response) => {
  await transactionService.getTransactionsByCategory(request, response);
});

router.post("/add", authMiddleware, async (request, response) => {
  await transactionService.addTransactionsByUserId(request, response);
});
router.delete("/delete/:id", async (request, response) => {
  await transactionService.deleteTransaction(request, response);
});

module.exports = router;
