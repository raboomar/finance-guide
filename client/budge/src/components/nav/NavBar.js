import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/user/userSlice";
const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (whereTo) => {
    navigate(whereTo);
  };

  const handleLogout = () => {
    dispatch(reset());
    dispatch(logout());
    handleNavigate("/");
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
            {user ? (
              <>
                <Nav.Link
                  onClick={() => {
                    handleNavigate("/transactions");
                  }}
                >
                  Transactions
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                onClick={() => {
                  handleNavigate("/auth");
                }}
              >
                Log-in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
