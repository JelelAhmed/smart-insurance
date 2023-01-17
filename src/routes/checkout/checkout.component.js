import React from "react";

import { PaystackGateway } from "../../utils/paystack/paystack.utils";

import docImage from '../../assets/images/policy-doc.jpg';

import './checkout.styles.scss';
import CheckoutForm from "../../components/checkout-form/checkout-form.component";


const Checkout = ({setName, amount, setEmail, setPhone}) => {
	return (
		<div className="checkout-page">
			<CheckoutForm />
    </div>
	)
};

export default Checkout;
