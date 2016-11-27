import React from 'react';
import { connect } from 'react-redux';


var BookNotesDetail = React.createClass({
	render: function(props) {
		return (
			<div className="book-notes-detail">
				<p>{this.props.item.title}</p>
				<p>{this.props.item.url}</p>
				<p>{this.props.item.note}</p>
			</div>
		)
	}
})


var Container = connect()(BookNotesDetail);

module.exports = Container;