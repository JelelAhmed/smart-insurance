import React from 'react'
import { Link } from 'react-router-dom';
import {PaystackGateway} from '../../utils/paystack/paystack.utils';

// import { Paystack } from '../../utils/paystack/paystack.utils';

import Button from '../button/button.component';

import './product-card.styles.scss';



const ProductCard = ({title, price, description}) => {

	
	const PaystackCheckout = () => {
		// Paystack();
	}

	return (
		<div className="plan-card">
			<div className="plan-detail">
				<div className="plan-title">{title}</div>
				<div className="plan-price">#{price} / Annum</div>
				<span className="plan-empty"></span>
			</div>

			<div className="plan-cta">
				<div className="plan-description">{description}</div>
				<div>
					<PaystackGateway />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;