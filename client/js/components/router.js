
import React from 'react';
import { Router, Route, hashHistory, IndexRoute, Provider } from 'react-router';
import store from '../redux/store';
import TrailList from './trail-list';
import Main from './main';
import Login from './login';
import Container from './container';
import Login from './login';
import ContainerLanding from './container-landing';
import BookNotesContainer from './book-notes-container';
import BookNotesLanding from './book-notes-container';
import BookNotesList from './book-notes-list';
import DateNotesContainer from './date-notes-container';


var routes = (
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path="/" component={Main} >
				<IndexRoute component={Login} />
				<Route path="/notes" component={Container} >
					<IndexRoute component={ContainerLanding} />
					<Route path="book-notes" component={BookNotesContainer} >
						<IndexRoute component={BookNotesLanding} />
						<Route path="list" component={BookNotesList} />
					</Route>
					<Route path="date-notes" component={DateNotesContainer} />
				</Route>
			</Route>
		</Router>
	</Provider>
);


module.exports = routes;