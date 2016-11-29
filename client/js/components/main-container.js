import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import TitleBar from './title-bar';
import MainNav from './main-nav';


var MainContainer = React.createClass({
	componentWillMount: function() {
		this.props.dispatch(actions.fetchUser());
	},
	render: function(props) {
		return (
			<div id="main-container">
				<TitleBar />
				<MainNav />
				{this.props.children}
			</div>
		)
	}
})


var Container = connect()(MainContainer);

module.exports = Container;
