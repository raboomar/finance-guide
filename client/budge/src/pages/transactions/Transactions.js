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
import { useNavigate } from "react-router-dom";
import Month from "../../components/date/Month";
import { fetchCurrentDate } from "../../features/month/monthSlice";
const Transactions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { expense, isLoading, expenseByCategoryIsLoading, expenseByCategory } =
    useSelector((state) => state.expense);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    } else {
      dispatch(fetchCurrentDate());
      dispatch(fetchUserExpense());
      dispatch(fetchUserExpenseByCategory());
    }
  }, [dispatch, navigate, user]);

  if (isLoading || expenseByCategoryIsLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <Month />
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
