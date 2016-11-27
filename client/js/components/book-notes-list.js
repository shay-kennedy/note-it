import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import BookNotesDetail from './book-notes-detail';


var BookNotesList = React.createClass({
	render: function(props) {
		console.log('BOOKNOTESLIST PROPS', this.props);
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
				</div>
			)
		};
		var noteList = this.props.category.items.map((item) => {
			return (<BookNotesDetail key={item._id} item={item} />)
		});
		return (
			<div id="book-notes-list">
				{noteList}
			</div>
		)
	}
})


var mapStateToProps = function(state, props) {
  return {
    category: state.categories.find((cat) => {
      if(state.activeCategory == cat._id) {
        return cat
      }
    }),
    activeCategory: state.activeCategory
  };
};

var Container = connect(mapStateToProps)(BookNotesList);

module.exports = Container;
