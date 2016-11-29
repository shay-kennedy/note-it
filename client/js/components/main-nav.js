import React from 'react';
import { Link } from 'react-router';


const MainNav = (props) => {
	return(
		<div id="main-nav">
			<Link to={'/knowtes/bookmarks'}>Bookmarks</Link>
			<Link to={'/knowtes/calendar'}>Calendar</Link>
		</div>
	)
};


export default MainNav;