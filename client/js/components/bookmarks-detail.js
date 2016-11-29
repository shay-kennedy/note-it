import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';


var BookmarksDetail = React.createClass({
	deleteBookmark: function() {
		this.props.dispatch(actions.deleteBookmark(this.props.activeCategory, this.props.item.bookmark_id));
	},
	render: function(props) {
		return (
			<div className="bookmarks-detail">
				<a href={this.props.item.url} target="_blank" ><p>{this.props.item.title}</p></a>
				<p>{this.props.item.note}</p>
				<input type="button" onClick={this.deleteBookmark} value="Delete" />
			</div>
		)
	}
})


var Container = connect()(BookmarksDetail);

module.exports = Container;