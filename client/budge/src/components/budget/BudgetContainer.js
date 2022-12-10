import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBudget } from "../../features/budget/budgetsSlice";
import { fetchExpense } from "../../features/budget/expenseSlice";
import BudgetsCard from "./BudgetsCard";
import "./budget.css";
import BudgetStack from "./BudgetStack";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "../expense/AddExpenseModal";
import Month from "../date/Month";

const BudgetContainer = () => {
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] =
    useState();

  const dispatch = useDispatch();
  const { budgets } = useSelector((state) => state.budget);
  const { expense } = useSelector((state) => state.expense);

  useEffect(() => {
    dispatch(fetchBudget());
    dispatch(fetchExpense());
  }, [dispatch]);

  return (
    <>
      <Month />
      <BudgetStack />
      <div className="budget-card-container">
        <AddBudgetModal />
        <AddExpenseModal defaultBudgetId={showAddExpenseModalBudgetId} />
        {budgets.map((budget) => {
          let amount = expense
            .filter((expense) => expense.budgetId === budget.id)
            .reduce(
              (total, currentExpense) => total + currentExpense.amount,
              0
            );

          return (
            <BudgetsCard key={budget.id} budget={budget} amount={amount} />
          );
        })}
      </div>
    </>
  );
};

export default BudgetContainer;
