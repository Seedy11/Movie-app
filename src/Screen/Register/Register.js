/** @format */

import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../Login/Login.element";
import { useDispatch, useSelector } from "react-redux";
import { addedUser } from "../../redux/getUser";
import { nanoid } from "@reduxjs/toolkit";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const user = useSelector((state) => state.register.user);
  const dispatch = useDispatch();
  const id = nanoid();

  console.log("usestate", user);
  // const validation  = (e) => {
  // 	// e.preventDefault()

  // 	// if (password === rePassword) {

  // 		// alert('password match ')

  // 		dispatch(addedUser({firstName, lastName, email , password }))

  // 	//  }
  // }

  return (
    <FormContainer>
      <Form>
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
      </Form>
    </FormContainer>
  );
};

export default Register;
