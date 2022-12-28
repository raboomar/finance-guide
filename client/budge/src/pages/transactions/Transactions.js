import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddExpenseBtn from "../../components/buttons/AddExpenseBtn";
import TransactionsCard from "../../components/transactions/TransactionsCard";
import {
  fetchUserExpense,
  fetchUserExpenseByCategory,
} from "../../features/expense/expenseSlice";
import "./transaction.css";
import BarChart from "../../components/transactions/BarChart";
const Transactions = () => {
  const dispatch = useDispatch();
  const { expense, isLoading, expenseByCategoryIsLoading, expenseByCategory } =
    useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(fetchUserExpense());
    dispatch(fetchUserExpenseByCategory());
  }, []);

  if (isLoading || expenseByCategoryIsLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <BarChart dataSet={expenseByCategory} />

      <div className="transactions-btns">
        <div className="add-expense">
          <AddExpenseBtn />
        </div>
      </div>
      <div className="transaction-body">
        <div>
          <h5>Date</h5>
        </div>
        <div>
          <h5> Name</h5>
        </div>
        <div>
          <h5> Category</h5>
        </div>
        <div>
          <h5> Amount</h5>
        </div>
      </div>
      {expense.map((exp) => (
        <TransactionsCard key={exp.transaction_id} exp={exp} />
      ))}
    </>
  );
};

export default Transactions;
