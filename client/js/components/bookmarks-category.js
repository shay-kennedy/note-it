import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


var BookmarksCategory = React.createClass({
	setActiveCategory: function() {
		this.props.dispatch(actions.setActiveCategory(this.props.cat.cat_id));
	},
	deleteCategory: function() {
		this.props.dispatch(actions.deleteCategory(this.props.cat.cat_id));
	},
	render: function(props) {
		return (
			<div id="bookmarks-category">
				<Link to={'/knowtes/bookmarks/list'} onClick={this.setActiveCategory} >{this.props.cat.categoryName}</Link>
				<Link to={'/knowtes/bookmarks'} onClick={this.deleteCategory}>DELETE</Link>
			</div>
		)
	}
})


var Container = connect()(BookmarksCategory);

module.exports = Container;
