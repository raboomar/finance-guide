import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import budgetUtils from "../budget/budgetUtils";
import expenseUtils from "./expenseUtils";
const initialState = {
  expense: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const fetchUserExpense = createAsyncThunk(
  "/userExpense",
  async (user, thunkAPI) => {
    try {
      return await expenseUtils.fetchUserExpense();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addUserExpense = createAsyncThunk(
  "/addUserExpense",
  async (expenseData, thunkAPI) => {
    try {
      return await expenseUtils.addUserExpense(expenseData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "/deleteTransaction",
  async (expenseData, thunkAPI) => {
    try {
      let expenseArr = thunkAPI.getState().expense.expense;
      return await expenseUtils.deleteTransaction(expenseData, expenseArr);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserExpense.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserExpense.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.expense = payload.payload;
      })
      .addCase(fetchUserExpense.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addUserExpense.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserExpense.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.expense = payload.payload;
      })
      .addCase(addUserExpense.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.expense = payload.payload;
      })
      .addCase(deleteTransaction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { fetchExpense, addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
