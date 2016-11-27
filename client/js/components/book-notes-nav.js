import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import BookNotesCategory from './book-notes-category';


var BookNotesNav = React.createClass({
	addCategory: function(e) {
		e.preventDefault();
		let category = prompt('New category name:');
		if (category == null) {
			return;
		};
		this.props.dispatch(actions.addCategory(category));
	},
	render: function(props) {
		var categoryTabs = this.props.categories.map((cat, index) => {
			console.log('CAT', cat);
			return <BookNotesCategory key={index} cat={cat} />
		});
		return (
			<div id="book-notes-nav">
				{categoryTabs}
				<p onClick={this.addCategory}>+ NEW</p>
			</div>
		)
	}
});


var mapStateToProps = function(state, props) {
	return {
		categories: state.categories
	}
}

var Container = connect(mapStateToProps)(BookNotesNav);

module.exports = Container;