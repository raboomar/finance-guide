import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/user/userSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    registerIsError,
    registerIsSuccess,
    registerIsLoading,
    message,
    user,
  } = useSelector((state) => state.user);
  const email = useRef();
  const password = useRef();
  const conformPassword = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    if (password.current.value !== conformPassword.current.value) {
      toast.error("Passwords do not match");
    } else {
      const newUser = {
        email: email.current.value,
        password: password.current.value,
      };
      dispatch(register(newUser));
    }
  };

  useEffect(() => {
    if (registerIsError) {
      toast.error(message, {
        toastId: "loginError",
      });
    }
    if (registerIsSuccess || user) {
      navigate("/transactions");
    }
    dispatch(reset());
  }, [user, registerIsError, registerIsSuccess, message, navigate, dispatch]);

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="registerForm">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={email}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerFormPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={password}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerFormConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          ref={conformPassword}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
