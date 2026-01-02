/** @format */

import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

export const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #141414 0%, #1c1c1c 100%);
  padding: 2rem;
`;

export const FormCard = styled.div`
  background: #1f1f1f;
  padding: 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 400px;
  color: white;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    margin-bottom: 2rem;
    color: #e50914;
    font-weight: 700;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  background: #2a2a2a;
  border: none;
  border-radius: 0.5rem;
  color: white;
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 1rem;

  &:focus {
    border-color: #e50914;
    box-shadow: 0 0 0 0.2rem rgba(229, 9, 20, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const StyledLabel = styled(Form.Label)`
  color: #bbb;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background: #e50914;
  border: none;
  font-weight: 600;
  padding: 0.8rem;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: 0.3s;

  &:hover {
    background: #b0060f;
  }
`;

export const StyledAlert = styled.div`
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  background: #ff4c4c;
  color: white;
  font-weight: 500;
  text-align: center;
`;
