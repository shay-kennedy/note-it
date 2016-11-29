import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import BookmarksDetail from './bookmarks-detail';


var BookmarksList = React.createClass({
	addBookmark: function(e) {
		e.preventDefault();
		var title = prompt('Note title:');
		var website = prompt('Note url:');
		var pattern = /^((http|https|ftp):\/\/)/;
		if(!pattern.test(website)) {
    	website = "http://" + website;
		}
		var note = prompt('Note note:');
		if (title == null) {
			return;
		};
		this.props.dispatch(actions.addBookmark(title, website, note, this.props.activeCategory));
	},
	render: function(props) {
		if (this.props.activeCategory == null) {
			return (
				<div>
					<p>Select a category above.</p>
				</div>
			)
		};
		if (this.props.category.items.length == 0) {
			return (
				<div>
					<p>Add a Bookmark to this category.</p>
					<input type="button" value="Add Note" onClick={this.addBookmark} />
				</div>
			)
		};
		var bookmarkList = this.props.category.items.map((item) => {
			return (<BookmarksDetail key={item.bookmark_id} item={item} activeCategory={this.props.activeCategory} />)
		});
		return (
			<div id="bookmark-list">
				<input type="button" value="Add Note" onClick={this.addBookmark} />
				{bookmarkList}
			</div>
		)
	}
})


var mapStateToProps = function(state, props) {
  return {
    category: state.categories.find((cat) => {
      if(state.activeCategory == cat.cat_id) {
        return cat
      }
    }),
    activeCategory: state.activeCategory
  };
};

var Container = connect(mapStateToProps)(BookmarksList);

module.exports = Container;
