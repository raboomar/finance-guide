import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryUtils from "./categoryUtils";

const initialState = {
  category: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const fetchCategory = createAsyncThunk(
  "/category",
  async (user, thunkAPI) => {
    try {
      return await categoryUtils.fetchCategory();
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

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.category = payload.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default categorySlice.reducer;
