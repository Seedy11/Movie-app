import React from 'react'
import { TextContainer } from './Text.element';

function Text(props) {

    switch (props.textType) {
        case 'h2' :
            return (
                <TextContainer>
                     <h2>{props.text}</h2>
                </TextContainer>
            );  
        default:  
            return ( 
                <TextContainer>
                 <p>{props.text}</p>
              </TextContainer>
            )
    }
  
}

export default Text