import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import BookNotesDetail from './book-notes-detail';


var BookNotesList = React.createClass({
	addNote: function(e) {
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
		this.props.dispatch(actions.addNote(title, website, note, this.props.activeCategory));
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
					<p>Add a Book-Note to this category.</p>
					<input type="button" value="Add Note" onClick={this.addNote} />
				</div>
			)
		};
		var noteList = this.props.category.items.map((item) => {
			return (<BookNotesDetail key={item.note_id} item={item} activeCategory={this.props.activeCategory} />)
		});
		return (
			<div id="book-notes-list">
				<input type="button" value="Add Note" onClick={this.addNote} />
				{noteList}
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

var Container = connect(mapStateToProps)(BookNotesList);

module.exports = Container;
