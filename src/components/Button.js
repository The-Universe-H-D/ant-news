import React from 'react';
import '../assets/scss/Button.scss';

function Button({ children }) {
	return (
		<button className="Button" type="submit">
			{children}
		</button>
	);
}

export default Button;
