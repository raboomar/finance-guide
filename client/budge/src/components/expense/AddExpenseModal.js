import React, { useRef } from "react";
import { useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../features/category/categorySlice";
import {
  addUserExpense,
  fetchUserExpense,
} from "../../features/expense/expenseSlice";

import { showAddExpenseModal } from "../../features/modal/modalStateSlice";
const AddExpenseModal = ({ defaultBudgetId }) => {
  const dispatch = useDispatch();
  const { addExpenseModal, isLoading } = useSelector(
    (state) => state.modalState
  );
  const { category } = useSelector((state) => state.category);
  const hide = () => {
    dispatch(showAddExpenseModal());
  };
  const nameRef = useRef();
  const amountRef = useRef();
  const categoryIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newExpense = {
      name: nameRef.current.value,
      amount: parseFloat(amountRef.current.value),
      categoryId: categoryIdRef.current.value,
    };
    dispatch(addUserExpense(newExpense));

    // dispatch(fetchUserExpense());
    hide();
  };
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <Modal show={addExpenseModal} onHide={hide}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={categoryIdRef}>
              {category.map((categorys) => (
                <option
                  key={categorys.category_id}
                  value={categorys.category_id}
                >
                  {categorys.category_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddExpenseModal;
