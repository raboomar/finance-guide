import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchBudget } from "../../features/budget/budgetsSlice";
import { addExpense } from "../../features/budget/expenseSlice";
const AddBudgetModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const maxRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let newBudget = {
      name: nameRef.current.value,
      amount: parseFloat(maxRef.current.value),
    };
    dispatch(addExpense(newBudget));
    dispatch(fetchBudget());
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              ref={maxRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
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

export default AddBudgetModal;
