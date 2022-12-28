import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../features/expense/expenseSlice";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "./reansactionCars.css";
const DeleteTransaction = ({ expenseId }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
    toast.success("Removed!");
  };

  return (
    <button
      className="trash-btn"
      onClick={() => {
        handleDelete(expenseId);
      }}
    >
      <FaTrashAlt color="red" />
    </button>
  );
};

export default DeleteTransaction;
