import React from 'react';
import ReactDOM from 'react-dom';


const TitleBar = (props) => {
	return(
		<div id="title-bar">
			<a href="/logout"><input type="button" value="Log Out" /></a>
			<h1>Note It!</h1>
		</div>
	)
};


export default TitleBar;
