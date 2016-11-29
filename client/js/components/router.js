
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from '../redux/store';
import Main from './main';
import Login from './login';
import MainContainer from './main-container';
import MainLanding from './main-landing';
import BookmarksList from './bookmarks-list';
import BookmarksContainer from './bookmarks-container';
import BookmarksLanding from './bookmarks-landing';
import CalendarContainer from './calendar-container';



var routes = (
	<Provider store={store}>
		<Router history={hashHistory} >
			<Route path="/" component={Main} >
				<IndexRoute component={Login} />
				<Route path="/knowtes" component={MainContainer} >
					<IndexRoute component={MainLanding} />
					<Route path="bookmarks" component={BookmarksContainer} >
						<IndexRoute component={BookmarksLanding} />
						<Route path="list" component={BookmarksList} />
					</Route>
					<Route path="calendar" component={CalendarContainer} />
				</Route>
			</Route>
		</Router>
	</Provider>
);

export default routes;
