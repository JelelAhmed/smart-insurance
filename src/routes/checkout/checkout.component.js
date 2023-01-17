import React from "react";

import { PaystackGateway } from "../../utils/paystack/paystack.utils";
import OrderSummary from "../../components/order-summary/order-summary.component";

import docImage from '../../assets/images/policy-doc.jpg';


import './checkout.styles.scss';


const Checkout = ({setName, amount, setEmail, setPhone}) => {
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

export default Checkout;

// return (
// 	<div className="checkout">
// 		<div className="checkout-billing">billing</div>
// 		<div className="checkout-summary">
// 			<OrderSummary />
// 		</div>
// 	</div>
// );