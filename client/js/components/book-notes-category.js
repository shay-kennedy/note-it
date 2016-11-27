import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


var BookNotesCategory = React.createClass({
	setActiveCategory: function() {
		this.props.dispatch(actions.setActiveCategory(this.props.cat._id));
	},
	deleteCategory: function() {
		this.props.dispatch(actions.deleteCategory(this.props.cat._id));
	},
	render: function(props) {
		return (
			<div>
				<Link to={'/notes/book-notes/list'} onClick={this.setActiveCategory} >{this.props.cat.categoryName}</Link>
				<Link to={'/notes/book-notes'} onClick={this.deleteCategory}>DELETE</Link>
			</div>
		)
	}
})


var Container = connect()(BookNotesCategory);

module.exports = Container;
