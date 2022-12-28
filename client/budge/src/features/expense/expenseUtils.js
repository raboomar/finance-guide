import axios from "axios";
import moment from "moment/moment";
const fetchUserExpense = async () => {
  let config = {
    headers: {
      month: 12,
      year: 2022,
    },
  };

  let res = await axios.get(
    "http://127.0.0.1:5001/budgeapp-b963e/us-central1/app/transactions/get",
    config
  );
  return res.data;
};

const addUserExpense = async (newExpense) => {
  let today = new Date();

  let date = moment(today).format("YYYY-MM-DD");
  let { name, amount, categoryId } = newExpense;
  let data = JSON.stringify({
    date,
    name: name,
    amount: amount,
    user_id: 1,
    category_id: categoryId,
  });

  var config = {
    method: "post",
    url: "http://127.0.0.1:5001/budgeapp-b963e/us-central1/app/transactions/add",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let res = await axios(config);
  return await fetchUserExpense();
};

const deleteTransaction = async (transactionId, expenses) => {
  await axios.delete(
    `http://127.0.0.1:5001/budgeapp-b963e/us-central1/app/transactions/delete/${transactionId}`
  );
  return expenses.filter(
    (expenses) => expenses.transaction_id !== transactionId
  );
};

const expenseUtils = { fetchUserExpense, addUserExpense, deleteTransaction };
export default expenseUtils;
