/** @format */

import React from "react";
import { TextContainer } from "./Text.element";

function Text(props) {
  switch (props.textType) {
    case "h2":
      return (
        <TextContainer>
          <h3>{props.text}</h3>
        </TextContainer>
      );
    default:
      return (
        <TextContainer>
          <p>{props.text}</p>
        </TextContainer>
      );
  }
}

export default Text;
