
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from '../redux/store';
import Main from './main';
import Login from './login';
import MainContainer from './main-container';
import MainLanding from './main-landing';
import BookNotesList from './book-notes-list';


var routes = (
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path="/" component={Main} >
				<IndexRoute component={Login} />
				<Route path="/knowtes" component={MainContainer} >
					<IndexRoute component={MainLanding} />
					<Route path="list" component={BookNotesList} />
				</Route>
			</Route>
		</Router>
	</Provider>
);

export default routes;
