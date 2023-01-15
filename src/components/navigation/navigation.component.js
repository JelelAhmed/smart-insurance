import React, { Fragment } from 'react';

import NavItem from '../navItem/navItem';
import './navigation.styles.scss';


const Navigation = () => {
	return (
		<Fragment>
			<nav className='nav'>
				<div className='nav-logo'>
					Smart Insurance
				</div>
				<ul className='nav-items'>
					<NavItem active text={'Home'} href={'#contact'} />
					<NavItem active text={'Service'} href={'#contact'} />
					<NavItem active text={'About'} href={'#contact'} />
					<NavItem active text={'Blog'} href={'#contact'} />
					<NavItem active text={'Contact'} href={'#contact'} />
					<frameElement />
				</ul>
			</nav>
		</Fragment>
	)
}

export default Navigation;
