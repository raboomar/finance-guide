import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budget/budgetsSlice";
import expenseReducer from "../features/budget/expenseSlice";
export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expense: expenseReducer,
  },
});
