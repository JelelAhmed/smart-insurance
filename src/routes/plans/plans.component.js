import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlanCard from "../../components/product-card/plan-card.component";

import PLAN_DATA from '../../plan-data.json';
import familyIcon from '../../assets/images/insured-family.jpg'

import { setPlansData } from "../../store/plans/plans.actions";
import { selectPlans } from "../../store/plans/plan.selectors";

import './plans.styles.scss';


const Plans = () => {

	const dispatch = useDispatch();
	dispatch(setPlansData(PLAN_DATA))

	const getPlans = useSelector(selectPlans);

	

	return (
		<div className="product">
			<div className="product-copy">
				<p className="product-message">Take the <span>Smart&nbsp;</span> step and secure your feature! <br />Chooose a Plan</p>
				<img className="product-image" src={familyIcon} alt='insured-family'/>
			</div>
			<div className="product-list">
				{getPlans.map(({name, id,
				price, description}) => (
					<PlanCard 
						key={id}
						name={name}
						price={price}
						description={description}
					/>
				))}
			</div>
		</div>
	);
};

export default Plans;