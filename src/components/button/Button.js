import React from 'react';
import { ButtonContainer } from './Button.element';

function Button({ buttonName, onChange }) {
	return (
		<ButtonContainer>
			<button onChange={onChange} className="buttonStyle">
				{buttonName}
			</button>
		</ButtonContainer>
	);
}

export default Button;
