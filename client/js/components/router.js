
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from '../redux/store';
import Main from './main';
import Login from './login';
import MainContainer from './main-container';
import ContainerLanding from './container-landing';
import BookNotesContainer from './book-notes-container';
import BookNotesLanding from './book-notes-landing';
import BookNotesList from './book-notes-list';
import DateNotesContainer from './date-notes-container';


var routes = (
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path="/" component={Main} >
				<IndexRoute component={Login} />
				<Route path="/notes" component={MainContainer} >
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

export default routes;
