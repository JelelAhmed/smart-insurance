import React from "react";

import './contact.styles.scss';
import familyIcon from '../../assets/images/insured-family.jpg'

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-body">
				<h2>Contact Us</h2>
				<img className="contact-image" src={familyIcon} alt='insured-family'/>
			</div>
		</div>
	);
};

export default Contact;