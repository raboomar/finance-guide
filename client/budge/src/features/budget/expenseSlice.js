import { createSlice } from "@reduxjs/toolkit";
import budgetUtils from "./budgetUtils";
const initialState = {
  expense: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    fetchExpense: (state, payload) => {
      state.expense = budgetUtils.fetchExpense(payload.payload);
    },
    addExpense: (state, payload) => {
      let { name, amount } = payload.payload;
      budgetUtils.addBudget(name, amount);
    },
  },
});

export const { fetchExpense, addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
