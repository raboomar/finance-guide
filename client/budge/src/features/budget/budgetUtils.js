const { v4: uuidv4 } = require("uuid");
let budget = [
  {
    id: "gym12",
    name: "Gym",
    amountBudgeted: 500,
  },
  {
    id: "food12",
    name: "Food",
    amountBudgeted: 200,
  },
];

let expense = [
  {
    id: "test1",
    budgetId: "food12",
    amount: 100,
    name: "mike",
    dateId: "12 2022",
  },
  {
    id: "test13",
    budgetId: "gym12",
    amount: 100,
    name: "mike",
    dateId: "11 2022",
  },
  {
    id: "test14",
    budgetId: "gym12",
    amount: 100,
    name: "mike",
    dateId: "12 2022",
  },
  {
    id: "test15",
    budgetId: "gym12",
    amount: 100,
    name: "mike",
    dateId: "12 2022",
  },
  {
    id: "test16",
    budgetId: "food12",
    amount: 100,
    name: "mike",
    dateId: "12 2022",
  },
  {
    id: "test17",
    budgetId: "food12",
    amount: 100,
    name: "mike",
    dateId: "12 2022",
  },
  {
    id: "test18",
    budgetId: "food12",
    amount: 100,
    name: "mike",
    dateId: "12 2022",
  },
  {
    id: "test19",
    budgetId: "food12",
    amount: 100,
    name: "mike",
    dateId: "1 2022",
  },
];

const fetchBudget = () => {
  // addBudget("Test", 300);
  return budget;
};

const addBudget = (name, budgetAmount) => {
  let today = new Date();

  let month = today.toLocaleString("default", {
    month: "numeric",
    year: "numeric",
  });

  let newBudget = {
    id: `${name}${month} `,
    name: name,
    amountBudgeted: budgetAmount,
  };

  budget = [...budget, newBudget];
};

const addExpense = (name, budgetId, amount) => {
  let today = new Date();
  let date = today.toLocaleString("default", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  let newExpense = {
    id: uuidv4(),
    date,
    name,
    budgetId,
    amount,
    dateId: `${today.getMonth() + 1} ${today.getFullYear()}`,
  };

  expense = [...expense, newExpense];
};

const fetchExpense = (budgetId) => {
  let today = new Date();
  let date = `${today.getMonth() + 1} ${today.getFullYear()}`;
  return expense.filter((expense) => expense.dateId === date);
};

const budgetUtils = { fetchBudget, fetchExpense, addBudget, addExpense };
export default budgetUtils;
