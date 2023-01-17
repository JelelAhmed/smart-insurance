import React from 'react';
import docImage from '../../assets/images/policy-doc.jpg';
import { PaystackGateway } from '../../utils/paystack/paystack.utils';


import './checkout-form.styles.scss';


const CheckoutForm = ({setName, amount, setEmail, setPhone}) => {
	return (
		<div className="App">
			<div className="container">
				<div className="item">
					<div className="overlay-effect"></div>
					<img
						className="item-image"
						src={docImage}
						alt="product"
					/>
					<div className="item-details">
						<p className="item-details__title">{'Plan'}</p>
						<p className="item-details__amount">NGN{ 20000 / 100}</p>
					</div>
				</div>
				<div className="checkout">
					<div className="checkout-form">
						<div className="checkout-field">
							<label>Name</label>
							<input/>
						</div>
						<div className="checkout-field">
							<label>Email</label>
							<input/>
						</div>
						<div className="checkout-field">
							<label>Phone</label>
							<input/>
						</div>
						<div className="checkout-button">
							<PaystackGateway />
						</div>
					</div>
				</div>
			</div>
    </div>
	)
};


export default CheckoutForm;