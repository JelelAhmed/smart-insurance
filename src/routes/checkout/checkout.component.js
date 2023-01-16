import React from "react";

import OrderSummary from "../../components/order-summary/order-summary.component";

import './checkout.styles.scss';


const Checkout = () => {
	return (
		<div className="checkout">
			<div className="checkout-billing">billing</div>
			<div className="checkout-summary">
				<OrderSummary />
			</div>
		</div>
	);
};

export default Checkout;