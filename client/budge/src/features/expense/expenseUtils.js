import axios from "axios";
import moment from "moment/moment";
let URL = process.env.REACT_APP_BACKEND_URL;
const fetchUserExpense = async (token, month, year, updatedMonth) => {
  let config = {
    headers: {
      month: updatedMonth?.pickedMonth ? updatedMonth.pickedMonth : month,
      year: updatedMonth?.pickedYear ? updatedMonth.pickedYear : year,
      "x-auth-token": token,
    },
  };

  let res = await axios.get(`${URL}transactions/get`, config);
  return res.data;
};

const fetchUserExpenseByCategory = async (token, month, year, updatedMonth) => {
  let config = {
    headers: {
      month: updatedMonth?.pickedMonth ? updatedMonth.pickedMonth : month,
      year: updatedMonth?.pickedYear ? updatedMonth.pickedYear : year,
      "x-auth-token": token,
    },
  };

  let res = await axios.get(`${URL}transactions/category`, config);
  return res.data;
};

const addUserExpense = async (newExpense, token, month, year) => {
  let today = new Date();

  let date = moment(today).format("YYYY-MM-DD");
  let { name, amount, categoryId } = newExpense;
  let data = JSON.stringify({
    date,
    name: name,
    amount: amount,
    category_id: categoryId,
  });

  var config = {
    method: "post",
    url: `${URL}transactions/add`,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
    data: data,
  };

  await axios(config);

  return await fetchUserExpense(token, month, year);
};

const deleteTransaction = async (transactionId, expenses) => {
  await axios.delete(`${URL}transactions/delete/${transactionId}`);
  return expenses.filter(
    (expenses) => expenses.transaction_id !== transactionId
  );
};

const expenseUtils = {
  fetchUserExpense,
  addUserExpense,
  deleteTransaction,
  fetchUserExpenseByCategory,
};
export default expenseUtils;
