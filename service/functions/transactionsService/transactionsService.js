const pool = require("../datebase/databaeConfig");

const getAllTransactionsByUserId = async (request, response) => {
  let month = request.header("month");
  let year = request.header("year");
  try {
    let id = request.user;
    let DB = pool.pool;
    const [results] = await DB.query(
      "select transaction_id, DATE_FORMAT(transaction_date, '%m/%d/%Y') AS formatted_date, transaction_name, amount, user.username ,category.category_name from transaction join user on transaction.user_id = user.id join category on transaction.category_id = category.category_id where transaction.user_id = ? and  month(transaction_date) =? and year(transaction_date)=? ;",
      [id, month, year]
    );

    return response.status(200).json(results);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

const getTransactionsByCategory = async (request, response) => {
  let month = request.header("month");
  let year = request.header("year");
  try {
    let id = request.user;
    let DB = pool.pool;
    const [results] = await DB.query(
      "SELECT  category_name , sum(amount) as total from transaction join category on transaction.category_id = category.category_id where transaction.user_id = ? and  month(transaction_date) =? and year(transaction_date)=? group by category_name ",
      [id, month, year]
    );

    return response.status(200).json(results);
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

const addTransactionsByUserId = async (request, response) => {
  try {
    let = { date, name, amount, category_id } = request.body;
    let user_id = request.user;
    let DB = pool.pool;
    const [results] = await DB.query(
      "insert into transaction(transaction_date, transaction_name, amount,  user_id,category_id ) VALUES (?,?, ?,?,?)",
      [date, name, amount, user_id, category_id]
    );

    return response.status(200).json({ message: "Data added" });
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

const deleteTransaction = async (request, response) => {
  let id = request.params.id;

  try {
    let DB = pool.pool;
    const [results] = await DB.query(
      "delete from transaction where transaction_id = ?;",
      [id]
    );

    return response.status(200).json({ message: "Data deleted" });
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

let transactionService = {
  getAllTransactionsByUserId,
  getTransactionsByCategory,
  addTransactionsByUserId,
  deleteTransaction,
};

module.exports = transactionService;
