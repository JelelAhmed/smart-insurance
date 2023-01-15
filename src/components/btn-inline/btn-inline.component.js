import React from "react";
import { Link } from "react-router-dom";

import './btn-inline.styles.scss';

const BtnInline = () => {
	return (
	<Link className="btn" to='service'>
			<button className='btn-inline'>Learn more<span>&rarr;</span></button>
	</Link>

	)
};

export default BtnInline;