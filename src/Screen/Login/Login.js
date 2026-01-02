/** @format */

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormCard,
  StyledFormControl,
  StyledLabel,
  StyledButton,
  StyledAlert,
} from "./Login.element";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const users = useSelector((state) => state.register.user);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.Email === email && u.Password === password
    );

    if (user) {
      setErrorMessage("");
      navigate("/"); // redirect to home
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <h2>Login</h2>
        {errorMessage && <StyledAlert>{errorMessage}</StyledAlert>}

        <Form.Group controlId="email">
          <StyledLabel>Email</StyledLabel>
          <StyledFormControl
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <StyledLabel>Password</StyledLabel>
          <StyledFormControl
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <StyledButton type="submit" onClick={handleLogin}>
          Login
        </StyledButton>
      </FormCard>
    </FormContainer>
  );
};

export default Login;
