import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import BudgetContainer from "./components/budget/BudgetContainer";
import NoMatch from "./features/error/NoMatch";
import Home from "./features/home/Home";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<BudgetContainer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Container>
  );
}

export default App;
