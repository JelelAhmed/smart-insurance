import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';

import Button from '../../components/button/button.component';
  
  const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey:'pk_test_a12747bad24132399cbca811fae2e27115b2ad6b',
  };
  
  // you can call this function anything
  
  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  export const PaystackGateway = () => {
    const initializePayment = usePaystackPayment(config);

		const navigate = useNavigate();

		const onSuccess = (reference) => {
			// Implementation for whatever you want to do with reference and after success call.
			console.log(reference);
			navigate('/login')
			
		};
	
		const handleClick = () => {
			initializePayment(onSuccess, onClose)
		}
		return (
			<div>
					<Button 
						handleClick = {handleClick}
						text='Pay Now' />
			</div>
		);
  };
