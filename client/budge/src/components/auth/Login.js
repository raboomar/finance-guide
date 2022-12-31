import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const { isError, isSuccess, isLoading, message, user } = useSelector(
    (state) => state.user
  );
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(login(user));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        toastId: "loginError",
      });
    }
    if (isSuccess || user) {
      navigate("/transactions");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={password}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log-in
      </Button>
    </Form>
  );
};

export default Login;
