import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';


var BookNotesCategory = React.createClass({
	setActiveCategory: function() {
		this.props.dispatch(actions.setActiveCategory(this.props.cat._id));
	},
	render: function(props) {
		return (
			<div>
				<p onClick={this.setActiveCategory} >{this.props.cat.category}</p>
			</div>
		)
	}
})


var Container = connect()(BookNotesCategory);

module.exports = Container;
