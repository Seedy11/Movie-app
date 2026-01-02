/** @format */

import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 2.5rem;
  text-align: center;
  // width: 200px;
  box-sizing: border-box;
  width: 350px;
  font-size: 12px;

  // height: 200px;
  // margin-bottom: 7rem;

  @media only screen and (max-width: 700px) {
    min-width: 100%;
    min-height: 150px;
  }

  .movieImage {
    width: 100%;
    height: 350px;
    border-radius: 15px;
    @media only screen and (max-width: 800px) {
      width: 100%;
      height: 80%;
    }
  }
`;

export const SmallContainer = styled.div`
  margin: 1rem 2rem;
  text-align: center;
  width: 200px;
  box-sizing: border-box;
  font-size: 12px;
  height: 200px;
  margin-bottom: 7rem;

  .movieCardImage {
    width: 100%;
    height: 250px;
    border-radius: 15px;
    @media only screen and (max-width: 800px) {
      width: 100%;
      height: 80%;
    }
  }

  @media only screen and (max-width: 800px) {
    margin: 2.5rem 0.5rem;
    display: block;
    max-width: 100%;
    height: 150px;
    width: 100px;
    gap: 1rem;
  }
`;
export const Gap = styled.div`
  display: block;
`;
