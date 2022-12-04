import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import AddBudgetModal from "./components/budget/AddBudgetModal";
import BudgetContainer from "./components/budget/BudgetContainer";
import BudgetStack from "./components/budget/BudgetStack";
import Month from "./components/date/Month";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  return (
    <Container className="my-4">
      <BudgetStack showAddBudgetModel={() => setShowAddBudgetModal(true)} />
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <Month />
      <BudgetContainer />
    </Container>
  );
}

export default App;
