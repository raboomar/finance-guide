import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../../features/budget/expenseSlice";
import { addExpense } from "../../features/budget/expenseSlice";
import { showAddExpenseModal } from "../../features/modal/modalStateSlice";
const AddExpenseModal = ({ defaultBudgetId }) => {
  const dispatch = useDispatch();
  const { budgets } = useSelector((state) => state.budget);
  const { addExpenseModal } = useSelector((state) => state.modalState);
  const hide = () => {
    dispatch(showAddExpenseModal());
  };
  const nameRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let newExpense = {
      name: nameRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    };
    dispatch(addExpense(newExpense));
    dispatch(fetchExpense());
    hide();
  };
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
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
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
