import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


// Login screen
const Login = (props) => {
	const onSubmitHandler = (e) => {
		e.preventDefault();
		this.props.dispatch(actions.fetchUser());
	};

	return(
		<div id="login">
			<h1>Note It!</h1>
			<form onSubmit={onSubmitHandler} >
				<p>Bookmark and calendar manager.</p>
				<a href="/auth/google"><input className="login" type="button" value="Log In" /></a>
			</form>
		</div>
	);
}


export default Login;
