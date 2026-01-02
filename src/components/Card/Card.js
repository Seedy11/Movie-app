/** @format */

import React from "react";
import { CardContainer, Gap, SmallContainer } from "./Card.element";
import Text from "../../components/Text/Text";

function Card(props) {
  switch (props.cardType) {
    case "homeCard":
      return (
        <CardContainer onClick={props.onClick}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${props.Image}`}
              className="movieImage"
            />
            <Text textType="h2" text={props.title} />
            <Text textType="p" text={props.Genre} />
          </div>
        </CardContainer>
      );
    case "movieCard":
      return (
        <SmallContainer onClick={props.onClick}>
          <img src={props.Image} className="movieCardImage" />
          <Text textType="h2" text={props.title} />
        </SmallContainer>
      );

    default:
      return;
  }
}

export default Card;
