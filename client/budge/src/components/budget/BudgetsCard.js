import { useState } from "react";
import { Card, ProgressBar, Button, Stack } from "react-bootstrap";
import { currencyFormatter } from "../../utils/format";
import AddExpenseBtn from "../buttons/AddExpenseBtn";
import ViewExpenseModal from "../expense/ViewExpenseModal";

const getProgressBarVariant = (totalSpent, budged) => {
  const ratio = totalSpent / budged;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
};

const BudgetsCard = ({ budget, amount }) => {
  const [showViewExpense, setShowViewExpense] = useState(false);
  const [budgetId, setBudgetId] = useState(null);
  const [budgetName, setBudgetName] = useState("");

  const handelModal = (budgetID, name) => {
    setBudgetId(budgetID);
    setBudgetName(name);
    showViewExpense ? setShowViewExpense(false) : setShowViewExpense(true);
  };

  return (
    <>
      {showViewExpense && (
        <ViewExpenseModal
          showViewExpense={showViewExpense}
          handelModal={handelModal}
          budgetId={budgetId}
          budgetName={budgetName}
        />
      )}
      <Card className="me-4">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{budget.name}</div>
            <div className="d-flex alight-items-baseline">
              {currencyFormatter.format(amount)}
              <span className=" ">
                /{currencyFormatter.format(budget.amountBudgeted)}
              </span>
            </div>
          </Card.Title>
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(amount, budget.amountBudgeted)}
            min={0}
            max={budget.amountBudgeted}
            now={amount}
          />
          <Stack direction="horizontal" gap="2" className="mt-4">
            <AddExpenseBtn />
            <Button
              variant="outline-secondary"
              onClick={() => {
                handelModal(budget.id, budget.name);
              }}
            >
              View Expenses
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export default BudgetsCard;
