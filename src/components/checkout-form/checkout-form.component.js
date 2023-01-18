import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInputEmail, setInputFirstName, setInputLastName, setInputPhoneNumber } from '../../store/form/form.actions';

import { selectPlanToPurchase } from '../../store/plans/plan.selectors';

import { PaystackGateway } from '../../utils/paystack/paystack.utils';

import docImage from '../../assets/images/policy-doc.jpg';
import './checkout-form.styles.scss';
import Button from '../button/button.component';
import { selectEmail, selectFirstName, selectLastName } from '../../store/form/form.selectors';
import { flushSync } from 'react-dom';



const CheckoutForm = () => {


	const	dispatch = useDispatch();
	const planToBuy = useSelector(selectPlanToPurchase);
	const firstName = useSelector(selectFirstName);
	const email = useSelector(selectEmail);
	const lastName = useSelector(selectLastName);


	const { name, price} = planToBuy;
	

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
						<p className="item-details__title">{name}</p>
						<p className="item-details__amount">NGN {price}.00</p>
					</div>
				</div>
				<div className="checkout">
				 <h3 className='checkout-cta'>Complete the Form Below</h3>

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
							<PaystackGateway 
								name={name}
								price={price}
								email={email}
							/>
							{/* <Button onCLick={() => PaystackGateway()} type={'submit'} text={'Pay'}/> */}
						</div>
					</div>
				</div>
			</form>
    </div>
	)
};


export default CheckoutForm;