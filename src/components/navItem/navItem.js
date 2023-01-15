import React from 'react';
// import scrollTo from 'gatsby-plugin-smoothscroll';

import classes from './navItem.module.scss';

const navItem = ({text, active, href, setToActive}) =>  {

			return (
					<li className={`${text === active ? `${classes.itemActive}` : null} ${classes.item}`}>
						<a
							className={classes.itemLink}
							onClick={() => setToActive(`${text}`)}>
							<span>{text}</span>
						</a>
				  </li>
			);
}



export default navItem;


// onClick={() => setToActive(`${text}`)}