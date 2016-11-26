import React from 'react';
import ReactDOM from 'react-dom';


// Contains all children components used for routes
const Main = (props) => {
	return(
		<div id="main">
			{props.children}
		</div>
	)
};


export default Main;
