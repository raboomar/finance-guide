import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Stack, Modal, Button } from "react-bootstrap";
const ViewExpenseModal = ({
  budgetId,
  handelModal,
  showViewExpense,
  budgetName,
}) => {
  const { expense } = useSelector((state) => state.expense);
  const [budgetExpense, setBudgetExpense] = useState([]);
  const getExpense = (BId) => {
    let thatBudgetExpense = expense.filter(
      (expense) => expense.budgetId === BId
    );
    setBudgetExpense(thatBudgetExpense);
  };

  useEffect(() => {
    getExpense(budgetId);
  }, [budgetId]);

  return (
    <Modal show={showViewExpense} onHide={handelModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            <div>{budgetName}-Expenses </div>
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="vertical" gap={3}>
          {budgetExpense.map((expens) => (
            <Stack direction="horizontal" gap={2} key={expens.id}>
              <div className="me-auto fs-4">{expens.name}</div>
              <div className="fs-5">${expens.amount}</div>
              <Button size="sm" variant="outline-danger">
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  );
};

export default ViewExpenseModal;
