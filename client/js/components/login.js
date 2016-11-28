import React from 'react';


const Login = () => {
	return (
		<div id="login">
			<h1>Knowte It!</h1>
			<p>Bookmarks with Notes.</p>
			<a href="/auth/google"><input className="login" type="button" value="Log In" /></a>
		</div>
	)
};


export default Login;