import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';

import Button from '../../components/button/button.component';
import { useSelector } from 'react-redux';
import { selectEmail, selectFirstName, selectLastName, selectPhone } from '../../store/form/form.selectors';
import { serverClient } from '../../api/api';
  
  
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  export const PaystackGateway = ({ email, price }) => {
		
		// const email = useSelector(selectEmail);
		const firstName = useSelector(selectFirstName);
		const lastName = useSelector(selectLastName);
		const phone = useSelector(selectPhone);


		const config = {
      reference: (new Date()).getTime().toString(),
      email: email,
      amount: price * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey:'pk_test_a12747bad24132399cbca811fae2e27115b2ad6b',
  };



    const initializePayment = usePaystackPayment(config);


		const navigate = useNavigate();


		const onSuccess = (response) => {
			// Implementation for whatever you want to do with reference and after success call.

			console.log(response);
			serverClient.post(`/payments`, {
				transaction_ref: response.reference,
				email: email,
				user_name: lastName
			})
			navigate('/')
			
		};
	
		const handleClick = () => {
			if(email && lastName && firstName && phone) {
				initializePayment(onSuccess, onClose)
			}
		}
		return (
			<div>
					<Button 
						handleClick = {handleClick}
						text='Pay' />
			</div>
		);
  };
