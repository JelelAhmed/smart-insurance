import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { serverClient } from '../../api/api';
import docImage from '../../assets/images/policy-doc.jpg';
import { setInputEmail } from '../../store/form/form.actions';
import { selectEmail } from '../../store/form/form.selectors';
import { selectUserPlans } from '../../store/plans/plan.selectors';
import { setUserPlans } from '../../store/plans/plans.actions';
import Button from '../button/button.component';



const SignIn = () => {

	const dispatch  = useDispatch();
	const navigate = useNavigate();


	const email = useSelector(selectEmail);
	const paymentHistory = useSelector(selectUserPlans);
	const onEmailChange = (event) => {
		dispatch(setInputEmail(event.target.value))
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		serverClient.post('/login', {
			email: email
		})
		.then(response => {
			dispatch(setUserPlans(response.data));
		})
	}
	return (
		<div className="App">
			<form onSubmit={handleFormSubmit} className="container">
			<div className="item">
				<h4 className='trans'>Transactions</h4>
				{paymentHistory ? (
					paymentHistory.map(({email, transaction_ref}) => {
						return (
							<div className='payments'>{transaction_ref}</div>
							
						);
					})
			)
			: <div>Nothing to Display</div> 
		}
					<div className="overlay-effect"></div>
				</div>
				<div className="checkout">
				 <h3 className='checkout-cta'>Sign In with a valid email to view all Payments associated to the account!</h3>
					<div className="checkout-form">
						</div>
						<div className="checkout-field">
							<label>email</label>
							<input
								onChange={onEmailChange}
								label={'email'} 
								required
							/>
						</div>
						<div className='sign'> 
							<Button text={'Log in'}/>
						</div>
						</div>
						
			</form>
    </div>
	)
}

export default SignIn;