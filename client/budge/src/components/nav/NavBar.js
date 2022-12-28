import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (whereTo) => {
    navigate(whereTo);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => {
            handleNavigate("/");
          }}
        >
          Budget App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                handleNavigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleNavigate("/transactions");
              }}
            >
              Transactions
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                handleNavigate("/budget");
              }}
            >
              Budgets
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
