import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


var MainNav = React.createClass({
	getCalendarEvents: function() {
		this.props.dispatch(actions.getCalendarEvents());
	},
	render: function() {
		return (
			<div id="main-nav">
				<Link to={'/knowtes/bookmarks'} >Bookmarks</Link>
				<Link to={'/knowtes/calendar'} onClick={this.getCalendarEvents} >Calendar</Link>
			</div>
		)
	}
});


var Container = connect()(MainNav);

module.exports = Container;