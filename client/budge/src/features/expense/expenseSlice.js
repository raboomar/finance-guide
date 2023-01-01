import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expenseUtils from "./expenseUtils";
const initialState = {
  expense: [],
  expenseByCategory: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  expenseByCategoryIsLoading: false,
};

export const fetchUserExpense = createAsyncThunk(
  "/userExpense",
  async (updatedMonth, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const month = thunkAPI.getState().month.monthNum;
      const year = thunkAPI.getState().month.year;

      return await expenseUtils.fetchUserExpense(
        token,
        month,
        year,
        updatedMonth
      );
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

export const fetchUserExpenseByCategory = createAsyncThunk(
  "/userExpenseCategory",
  async (updatedMonth, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const month = thunkAPI.getState().month.monthNum;
      const year = thunkAPI.getState().month.year;
      return await expenseUtils.fetchUserExpenseByCategory(
        token,
        month,
        year,
        updatedMonth
      );
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
      const token = thunkAPI.getState().user.user.token;

      const month = thunkAPI.getState().month.monthNum;
      const year = thunkAPI.getState().month.year;
      return await expenseUtils.addUserExpense(expenseData, token, month, year);
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
      .addCase(fetchUserExpenseByCategory.pending, (state) => {
        state.expenseByCategoryIsLoading = true;
      })
      .addCase(fetchUserExpenseByCategory.fulfilled, (state, payload) => {
        state.expenseByCategoryIsLoading = false;
        state.expenseByCategory = payload.payload;
      })
      .addCase(fetchUserExpenseByCategory.rejected, (state) => {
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
