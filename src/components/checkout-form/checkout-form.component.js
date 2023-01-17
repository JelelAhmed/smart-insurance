import React from 'react';
import { useDispatch } from 'react-redux';

import { setInputEmail, setInputFirstName, setInputLastName, setInputPhoneNumber } from '../../store/form/form.actions';

import { PaystackGateway } from '../../utils/paystack/paystack.utils';


import docImage from '../../assets/images/policy-doc.jpg';


import './checkout-form.styles.scss';



const CheckoutForm = () => {
	const	dispatch = useDispatch();

	const	handleEmailChange = (event) => {
		dispatch(setInputEmail(event.target.value))
	}

	const	handleLastNameChange = (event) => {
		dispatch(setInputLastName(event.target.value))
	}

	const	handleFirstNameChange = (event) => {
		dispatch(setInputFirstName(event.target.value))
	}

	const	handlePhoneChange = (event) => {
		dispatch(setInputPhoneNumber(event.target.value))
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
	}

	return (
		<div className="App">
			<form onSubmit={handleFormSubmit} className="container">
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
							<label>First Name</label>
							<input 
								onChange={handleFirstNameChange} 
								label={'First Name'} 
								type={'text'} 
								placeholder={'Type here'} 
								required	
							/>
						</div>
						<div className="checkout-field">
							<label>Last Name</label>
							<input 
								onChange={handleLastNameChange} 
								label={'Last Name'} 
								type={'text'} 
								placeholder={'Type here'} 
								required/>
						</div>
						<div className="checkout-field">
							<label>Email</label>
							<input 
								onChange={handleEmailChange} 
								label={'Last Name'} 
								type={'email'} 
								placeholder={'Type here'} 
								required 
							 />
						</div>
						<div className="checkout-field">
							<label>Phone</label>
							<input
								onChange={handlePhoneChange} 
								label={'Phone'} 
								type={'number'} 
								placeholder={'Type here'} 
								required
							/>
						</div>
						<div className="checkout-button">
							<button>SUbmit</button>
						</div>
					</div>
				</div>
			</form>
    </div>
	)
};


export default CheckoutForm;