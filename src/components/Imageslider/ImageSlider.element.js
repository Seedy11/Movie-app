/** @format */
import styled from "styled-components";
export const ImageSliderContainer = styled.div`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  height: 900px;
  margin-bottom: 5rem;

  .movieCardImage {
    width: 100%;
    height: 900px;
    border-radius: 15px;
    image-rendering: auto;
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
