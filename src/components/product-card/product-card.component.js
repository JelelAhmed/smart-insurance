import React from 'react'

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({title, price, description}) => {
	return (
		<div className="plan-card">
			<div className="plan-detail">
				<div className="plan-title">{title}</div>
				<div className="plan-price">#{price} / Annum</div>
				<span className="plan-empty"></span>
			</div>

			<div className="plan-cta">
				<div className="plan-description">{description}</div>
				<Button text={'Go to Checkout'} />
			</div>
		</div>
	);
};

export default ProductCard;