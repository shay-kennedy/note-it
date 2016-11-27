import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';


var BookNotesCategory = React.createClass({
	setActiveCategory: function() {
		this.props.dispatch(actions.setActiveCategory(this.props.cat._id));
	},
	render: function(props) {
		return (
			<div>
				<Link to={'/notes/book-notes/list'} onClick={this.setActiveCategory} >{this.props.cat.categoryName}</Link>
			</div>
		)
	}
})


var Container = connect()(BookNotesCategory);

module.exports = Container;
