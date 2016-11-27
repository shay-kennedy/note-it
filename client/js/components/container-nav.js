import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


const ContainerNav = (props) => {
	return(
		<div id="container-nav">
			<Link to={'/notes/book-notes'}>Book Notes</Link>
			<Link to={'/notes/date-notes'}>Date Notes</Link>
		</div>
	)
};


export default ContainerNav;
