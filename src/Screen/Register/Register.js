/** @format */

import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addedUser } from "../../redux/getUser";
import { nanoid } from "@reduxjs/toolkit";
import {
  FormCard,
  FormContainer,
  StyledAlert,
  StyledButton,
  StyledFormControl,
  StyledLabel,
} from "./Register.element";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const user = useSelector((state) => state.register.user);
  const dispatch = useDispatch();
  const id = nanoid();

  const navigation = useNavigate();
  const userData = {
    userId: id,
    firstName: firstName,
    LastName: lastName,
    Email: email,
    Password: password,
    reTypePassword: rePassword,
  };

  const userValidation = (e) => {
    if (!firstName || !lastName || !email || !password || !rePassword)
      setErrorMessage(true);
    else if (password === rePassword) {
      dispatch(addedUser(userData));
      setErrorMessage(false);
      navigation("/login");
    } else {
      setErrorMessage(true);
    }
  };

  console.log("usestate", user);

  return (
    <FormContainer>
      <FormCard>
        <h2>Create Account</h2>

        {errorMessage && (
          <StyledAlert>
            {password !== rePassword
              ? "Passwords do not match"
              : "All fields are required"}
          </StyledAlert>
        )}

        <Form.Group controlId="firstName">
          <StyledLabel>First Name</StyledLabel>
          <StyledFormControl
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <StyledLabel>Last Name</StyledLabel>
          <StyledFormControl
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <StyledLabel>Email</StyledLabel>
          <StyledFormControl
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <StyledLabel>Password</StyledLabel>
          <StyledFormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="rePassword">
          <StyledLabel>Re-type Password</StyledLabel>
          <StyledFormControl
            type="password"
            placeholder="Re-type Password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </Form.Group>

        <StyledButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            userValidation();
          }}>
          Create Account
        </StyledButton>
      </FormCard>
    </FormContainer>
  );
};

export default Register;
