import React, { useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBudget } from "../../features/budget/budgetsSlice";
import { addBudget } from "../../features/budget/budgetsSlice";
import { showAddBudgetModal } from "../../features/modal/modalStateSlice";
const AddBudgetModal = () => {
  const dispatch = useDispatch();
  const { addBudgetModal } = useSelector((state) => state.modalState);
  const nameRef = useRef();
  const maxRef = useRef();

  const closeModal = () => {
    dispatch(showAddBudgetModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newBudget = {
      name: nameRef.current.value,
      amount: parseFloat(maxRef.current.value),
    };
    dispatch(addBudget(newBudget));
    dispatch(fetchBudget());
    closeModal();
  };
  return (
    <Modal show={addBudgetModal} onHide={closeModal}>
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
