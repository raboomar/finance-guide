import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budget/budgetsSlice";
import expenseReducer from "../features/budget/expenseSlice";
import modalStateReducer from "../features/modal/modalStateSlice";
export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expense: expenseReducer,
    modalState: modalStateReducer,
  },
});
