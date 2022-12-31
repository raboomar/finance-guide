import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  month: 0,
  year: 0,
  monthNum: 0,
};

export const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    fetchCurrentDate: (state) => {
      let today = new Date();
      var now = new Date();
      //   let current = new Date(now.getFullYear(), now.getMonth() + 3);
      //   console.log(current);
      let month = today.toLocaleString("default", {
        month: "long",
      });
      let year = today.toLocaleString("default", {
        year: "numeric",
      });
      state.month = month;
      state.year = year;
      state.monthNum = today.getMonth() + 1;
    },
  },
});

export const { fetchCurrentDate } = monthSlice.actions;
export default monthSlice.reducer;
