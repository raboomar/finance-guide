import React from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
const Register = () => {
  const email = useRef();
  const password = useRef();
  const conformPassword = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    if (password.current.value !== conformPassword.current.value) {
      toast.error("Passwords do not match");
    }
    console.log(email.current.value, password.current.value);
  };
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="registerForm">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerFormPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerFormConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          ref={conformPassword}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
