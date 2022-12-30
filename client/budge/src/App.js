import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddExpenseModal from "./components/expense/AddExpenseModal";
import NavBar from "./components/nav/NavBar";
import Auth from "./pages/auth/Auth";
import NoMatch from "./pages/error/NoMatch";
import Home from "./pages/home/Home";
import Transactions from "./pages/transactions/Transactions";

function App() {
  return (
    <>
      <NavBar />
      <Container className="my-4">
        <AddExpenseModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
