/** @format */

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "./Login.element";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.register);
  const data = user.user;
  console.log("seedy", data);
  // const renderListOfUserNames = (names) => {
  //   return names.map((name) => <li>{name}</li>);
  // };

  return (
    <FormContainer>
      <Form>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>

        {/* <Button
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
        </Button> */}
        <div>
          {/* <h2>Name List:</h2> */}
          {/* <ul>{renderListOfUserNames(data)}</ul> */}
        </div>
      </Form>
    </FormContainer>
  );
};

export default Login;
