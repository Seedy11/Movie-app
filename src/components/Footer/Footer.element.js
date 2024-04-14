/** @format */

import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  background-color: white;
  margin-top: 5rem;
  // padding: 3rem;
  // margin-bottom: 2rem;
  // border-radius: 2rem;
  // display: flex;
  text-align: center;
  gap: 5rem;
  bottom: 0;
  left: 0;
  right: 0;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
    gap: 2rem;
  }
`;
