import React from 'react';
import ReactDOM from 'react-dom';
import ContainerNav from './container-nav';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import TitleBar from './title-bar';


var MainContainer = React.createClass({
	componentWillMount: function() {
		this.props.dispatch(actions.fetchUser());
	},
	render: function(props) {
		return (
			<div id="container">
				<TitleBar />
				<ContainerNav />
				{this.props.children}
			</div>
		)
	}
})


var Container = connect()(MainContainer);

module.exports = Container;
