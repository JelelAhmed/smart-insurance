import React from "react";
import { Link } from "react-router-dom";

import './btn-inline.styles.scss';

const BtnInline = () => {
	return (
		<div className="btn">
			<button className='btn-inline'>Learn more<span>&rarr;</span></button>
		</div>
	)
};

export default BtnInline;

