import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPlanToPurchase } from '../../store/plans/plan.selectors';
import { setPlanToPurchase } from '../../store/plans/plans.actions';
import {PaystackGateway} from '../../utils/paystack/paystack.utils';
import Button from '../button/button.component';


import './plan-card.styles.scss';

const PlanCard = ({name, price, description}) => {

	const dispatch = useDispatch();
	const PlanToPurchase = {
		name,
		price
	}

	return (
		<div className="plan-card">
			<div className="plan-detail">
				<div className="plan-title">{name}</div>
				<div className="plan-price">#{price} / Annum</div>
				<span className="plan-empty"></span>
			</div>

			<div className="plan-cta">
				<div className="plan-description">{description}</div>
				<Link onClick={() => dispatch(setPlanToPurchase(PlanToPurchase))}  to={'/checkout'}>
					<Button text={'Go to Checkout'}/>			
				</Link>
			</div>
		</div>
	);
};

export default PlanCard;