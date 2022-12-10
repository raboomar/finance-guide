import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalState",
  initialState: {
    addExpenseModal: false,
    addBudgetModal: false,
    viewExpenseModal: false,
  },
  reducers: {
    showAddExpenseModal: (state) => {
      state.addExpenseModal = state.addExpenseModal ? false : true;
    },
    showAddBudgetModal: (state) => {
      state.addBudgetModal = state.addBudgetModal ? false : true;
    },
    showViewExpenseModal: (state) => {
      state.viewExpenseModal = state.viewExpenseModal ? false : true;
    },
  },
  extraReducers: {},
});

export const { showAddExpenseModal, showAddBudgetModal, showViewExpenseModal } =
  modalSlice.actions;
export default modalSlice.reducer;
