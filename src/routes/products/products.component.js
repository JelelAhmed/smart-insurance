import React from "react";

import './products.styles.scss';
import familyIcon from '../../assets/images/insured-family.jpg'

const Products = () => {
	return (
		<div className="product">
			<div className="product-body">
				<h2>Products</h2>
				<img className="contact-image" src={familyIcon} alt='insured-family'/>
			</div>
		</div>
	);
};

export default Products;