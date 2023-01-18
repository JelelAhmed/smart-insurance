import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import NavItem from '../../components/navItem/navItem';


import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<nav className='nav'>
				<div className='nav-logo'>
					Smart Insurance
				</div>
				<ul className='nav-items'>
				<Link className="nav-link" 					to='/'>
						<NavItem active text={'Home'} href={'#home'} />
					</Link>
					<NavItem active text={'Services'} href={'#service'} />
					<NavItem active text={'About'} href={'#contact'} />
					<NavItem active text={'Blog'} href={'#contact'} />
					
					<Link className="nav-link" to='contact'>
						<NavItem active text={'Contact'} href={'#contact'} />
					</Link>
					<Link className="nav-link" to='/login'>
						<NavItem active text={'login'} href={'login'} />
					</Link>
					<Fragment />
				</ul>
			</nav>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;