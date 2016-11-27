import React from 'react';
import ReactDOM from 'react-dom';
import actions from '../redux/actions';
import { connect } from 'react-redux';


var BookNotesNav = React.createClass({
	addCategory: function(e) {
		e.preventDefault();
		console.log("HERE!");
		let category = prompt('New category name:');
		if (category == null) {
			return;
		};
		console.log('CAT', category);
		this.props.dispatch(actions.addCategory(category));
	},
	render: function() {
		return (
			<div id="book-notes-nav">
				<p onClick={this.addCategory}>+ NEW</p>
			</div>
		)
	}
});


var Container = connect()(BookNotesNav);

module.exports = Container;