import React from "react";

import ProductCard from "../../components/product-card/product-card.component";

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
					<ProductCard 
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