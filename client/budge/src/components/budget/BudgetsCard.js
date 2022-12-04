import { Card, ProgressBar, Button, Stack } from "react-bootstrap";
import { currencyFormatter } from "../../utils/format";
const getProgressBarVariant = (totalSpent, budged) => {
  const ratio = totalSpent / budged;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
};

const BudgetsCard = ({ budget, amount }) => {
  return (
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
          <Button variant="outline-primary" className="ms-auto">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default BudgetsCard;
