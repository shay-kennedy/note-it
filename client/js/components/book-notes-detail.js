import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';


var BookNotesDetail = React.createClass({
	deleteNote: function() {
		this.props.dispatch(actions.deleteNote(this.props.activeCategory, this.props.item.note_id));
	},
	render: function(props) {
		return (
			<div className="book-notes-detail">
				<a href={this.props.item.url} target="_blank" ><p>{this.props.item.title}</p></a>
				<p>{this.props.item.note}</p>
				<input type="button" onClick={this.deleteNote} value="Delete" />
			</div>
		)
	}
})


var Container = connect()(BookNotesDetail);

module.exports = Container;