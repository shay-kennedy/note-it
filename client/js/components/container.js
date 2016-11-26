import React from 'react';
import ReactDOM from 'react-dom';
import ContainerNav from 'container-nav';


const Container = (props) => {
	return(
		<div id="container">
			<h1>Note It!</h1>
			<ContainerNav />
			{props.children}
		</div>
	)
};


export default Container;
