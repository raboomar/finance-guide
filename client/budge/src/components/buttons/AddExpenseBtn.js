import React from "react";
import { Button } from "react-bootstrap";
import { showAddExpenseModal } from "../../features/modal/modalStateSlice";
import { useDispatch } from "react-redux";
const AddExpenseBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="outline-primary"
      onClick={() => {
        dispatch(showAddExpenseModal());
      }}
    >
      Add Expense
    </Button>
  );
};

export default AddExpenseBtn;
