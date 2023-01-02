import React from "react";
import Tab from "react-bootstrap/Tab";
import Login from "../../components/auth/Login";
import Nav from "react-bootstrap/Nav";
import "./auth.css";
import Register from "../../components/auth/Register";
const Auth = () => {
  return (
    <div className="auth-box">
      <Tab.Container id="-tabs-example" defaultActiveKey="first">
        <Nav variant="pills " className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="first">Log-in</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Register</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Login />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Register />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Auth;
