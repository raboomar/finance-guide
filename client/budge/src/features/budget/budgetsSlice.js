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
  },
});

export const { fetchBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
