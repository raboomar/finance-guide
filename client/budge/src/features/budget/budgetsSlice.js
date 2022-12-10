import { createSlice } from "@reduxjs/toolkit";
import budgetUtils from "./budgetUtils";

const initialState = {
  budgets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    fetchBudget: (state) => {
      state.budgets = budgetUtils.fetchBudget();
    },
    addBudget: (state, payload) => {
      let { name, amount } = payload.payload;
      budgetUtils.addBudget(name, amount);
    },
  },
});

export const { fetchBudget, addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
