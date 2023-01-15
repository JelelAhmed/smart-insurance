import React from "react";

import './home.styles.scss';
import familyIcon from '../../assets/images/insured-family.jpg'

const Home = () => {
	return (
		<div className="home">
			<div className="home-body">
				<h2>Home</h2>
				<img className="home-image" src={familyIcon} alt='insured-family'/>
			</div>
		</div>
	);
};

export default Home;
