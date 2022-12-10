import { Stack, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showAddBudgetModal } from "../../features/modal/modalStateSlice";
import AddExpenseBtn from "../buttons/AddExpenseBtn";
const BudgetStack = () => {
  const dispatch = useDispatch();
  return (
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto"> Budgets</h1>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(showAddBudgetModal());
        }}
      >
        Add Budget
      </Button>
      <AddExpenseBtn />
    </Stack>
  );
};

export default BudgetStack;
