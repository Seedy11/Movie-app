/** @format */

import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "./Login.element";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.register);
  console.log("selector", user);
  return (
    <FormContainer>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Re-type Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={
            () =>
              dispatch(
                addedUser([{ id, firstName, lastName, email, password }])
              )
            // console.log("play", id, firstName, lastName, email, password)
          }>
          Submit
        </Button>
      </Form> */}
    </FormContainer>
  );
};

export default Login;
