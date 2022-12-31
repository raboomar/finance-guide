import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../features/budget/budgetsSlice";
import expenseReducer from "../features/expense/expenseSlice";
import modalStateReducer from "../features/modal/modalStateSlice";
import categoryReducer from "../features/category/categorySlice";
import userReducer from "../features/user/userSlice";
import monthReducer from "../features/month/monthSlice";
export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expense: expenseReducer,
    category: categoryReducer,
    modalState: modalStateReducer,
    user: userReducer,
    month: monthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
