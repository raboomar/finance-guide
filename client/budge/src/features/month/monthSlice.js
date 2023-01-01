import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: 0,
  year: 0,
  monthNum: 0,
  date: 0,
  inDate: 0,
};

export const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    fetchCurrentDate: (state) => {
      let today = new Date();

      let month = today.toLocaleString("default", {
        month: "long",
      });
      let year = today.toLocaleString("default", {
        year: "numeric",
      });

      let inputDate = `${today.getFullYear()}-${today.toLocaleString(
        "default",
        {
          month: "2-digit",
        }
      )}`;

      state.month = month;
      state.year = year;
      state.monthNum = today.getMonth() + 1;
      state.inDate = inputDate;
    },
    updateCurrentMonth: (state, data) => {
      let { month, year, monthWord } = data.payload;
      state.inDate = `${year}-${month}`;
      state.month = month;
      state.year = year;
    },
  },
});

export const { fetchCurrentDate, updateCurrentMonth } = monthSlice.actions;
export default monthSlice.reducer;
