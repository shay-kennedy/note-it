import React from 'react';
import ReactDOM from 'react-dom';


// Login screen
const Login = (props) => {
	return(
		<div id="login">
			<h1>Note It!</h1>
			<p>Bookmark and calendar manager.</p>
			<a href="/auth/google"><input className="login" type="button" value="Log In" /></a>
		</div>
	)
}


export default Login;
