import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import BookmarksCategory from './bookmarks-category';


var BookmarksNav = React.createClass({
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
			return <BookmarksCategory key={index} cat={cat} />
		});
		return (
			<div id="bookmarks-nav">
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

var Container = connect(mapStateToProps)(BookmarksNav);

module.exports = Container;