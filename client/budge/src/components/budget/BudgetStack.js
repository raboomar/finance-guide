import { Stack, Button } from "react-bootstrap";

const BudgetStack = ({ showAddBudgetModel }) => {
  return (
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto"> Budgets</h1>
      <Button variant="primary" onClick={showAddBudgetModel}>
        Add Budget
      </Button>
      <Button variant="outline-primary">Add Expense</Button>
    </Stack>
  );
};

export default BudgetStack;
