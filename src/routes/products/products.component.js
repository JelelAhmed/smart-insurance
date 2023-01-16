import React from "react";

import './products.styles.scss';
import familyIcon from '../../assets/images/insured-family.jpg'
import Button from "../../components/button/button.component";
import ProductCard from "../../components/product-card/product-card.component";

const Products = () => {
	return (
		<div className="product">
			<div className="product-copy">
				<p className="product-message">Take the <span>Smart&nbsp;</span> step and secure your feature! <br />Chooose a Plan</p>
				<img className="product-image" src={familyIcon} alt='insured-family'/>
			</div>
			<div className="product-list">
				<ProductCard 
					title={'Basic'} 
					price={'287'}
					description={'Our starter package that gets YOU going'}
				/>
			
				<ProductCard 
					title={'Standard'} 
					price={'499'}
					description={'Best package for the family up to four'}
				/>
				<ProductCard 
					title={'Premium'} 
					price={'969'}
					description={"Extended family? you'll be spoit for choice"}
				/>
			</div>
			<h2> Can't find what you're looking for? get a quote</h2>
		</div>
	);
};

export default Products;