import React from 'react';
import ReactDOM from 'react-dom';


const Login = () => {
	return (
		<div id="login">
			<h1>Note It!</h1>
			<p>Bookmark and Calendar Manager.</p>
			<a href="/auth/google"><input className="login" type="button" value="Log In" /></a>
		</div>
	)
};


export default Login;