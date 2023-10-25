import React, { useState } from 'react';
import { CardContainer, CardWrapper, Gap, SmallContainer } from './Card.element';
import Text from '../../components/Text/Text';

function Card(props) {
	switch (props.cardType) {
		case 'homeCard':
			return (
				<CardContainer>
					<div>
						<img src={props.Image} className="movieImage" />
					</div>
					<Gap>
						<Text textType="h2" text={props.title} />
						<div className="textDisplay">
							<Text textType="p" text={props.Genre} />
						</div>
					</Gap>
				</CardContainer>
			);
		case 'movieCard':
			return (
				<SmallContainer>
					<img src={props.Image} className="movieCardImage" />
					<Text textType="h2" text={props.title} />
				</SmallContainer>
			);

		default:
			return;
	}
}

export default Card;
