import React from "react";

import BtnInline from "../../components/btn-inline/btn-inline.component";
import './home.styles.scss';


import familyIcon from '../../assets/images/insured-family.jpg'
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<div className="home-hero">
				<div className="home-title">
					<p className="home-welcome">Life is embracing those little moments.</p>
					<p className="home-message"><span>Smart&nbsp;</span> insurance is protecting them.</p>

				  <div className="home-cta">
						<p>Get protection for the whole family</p>
						<Link to='/products'>
							<BtnInline />
						</Link>
					</div>
				</div>
				<img className="home-image" src={familyIcon} alt='insured-family'/>
			</div>
		</div>
	);
};

export default Home;
