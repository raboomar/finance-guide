import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddExpenseBtn from "../../components/buttons/AddExpenseBtn";
import TransactionsCard from "../../components/transactions/TransactionsCard";
import {
  fetchUserExpense,
  fetchUserExpenseByCategory,
  sortExpense,
} from "../../features/expense/expenseSlice";
import "./transaction.css";
import BarChart from "../../components/transactions/BarChart";
import { useNavigate } from "react-router-dom";
import Month from "../../components/date/Month";
import { fetchCurrentDate } from "../../features/month/monthSlice";
import Loading from "../../components/loading/Loading";
const Transactions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { expense, isLoading, expenseByCategoryIsLoading, expenseByCategory } =
    useSelector((state) => state.expense);
  const { inDate } = useSelector((state) => state.month);

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
    return <Loading />;
  }
  if (expense.length === 0) {
    return (
      <div>
        <Month />
        <h3>No expense for {inDate}</h3>
        <AddExpenseBtn />
      </div>
    );
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
        <div
          onClick={() => {
            dispatch(sortExpense("transaction_name"));
          }}
        >
          <h5> Name</h5>
        </div>
        <div
          onClick={() => {
            dispatch(sortExpense("category_name"));
          }}
        >
          <h5> Category</h5>
        </div>
        <div
          onClick={() => {
            dispatch(sortExpense("amount"));
          }}
        >
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
