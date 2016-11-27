import React from 'react';
import ReactDOM from 'react-dom';
import BookNotesNav from './book-notes-nav';


const BookNotesContainer = (props) => {
	return(
		<div id="book-notes-container">
			<BookNotesNav />
			{props.children}
		</div>
	)
};


export default BookNotesContainer;
