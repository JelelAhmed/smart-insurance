import React from 'react';

import './button.styles.scss';

const Button = (props) => (
	<button onClick={props.handleClick} className='button'>{props.text}</button>
);

export default Button;