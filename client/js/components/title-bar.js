import React from 'react';
import { Link } from 'react-router';


const TitleBar = (props) => {
	return(
		<div id="title-bar">
			<a href="/logout"><input type="button" value="Log Out" /></a>
			<Link to={'/knowtes'} ><h1>Knowte It!</h1></Link>
		</div>
	)
};


export default TitleBar;
