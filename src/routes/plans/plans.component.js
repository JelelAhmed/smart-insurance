import React from "react";

import PlanCard from "../../components/product-card/plan-card.component";

import PLAN_DATA from '../../plan-data.json';
import familyIcon from '../../assets/images/insured-family.jpg'

import './plans.styles.scss';


const Plans = () => {
	return (
		<div className="product">
			<div className="product-copy">
				<p className="product-message">Take the <span>Smart&nbsp;</span> step and secure your feature! <br />Chooose a Plan</p>
				<img className="product-image" src={familyIcon} alt='insured-family'/>
			</div>
			<div className="product-list">
				{PLAN_DATA.map(({name, id,
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